import "./index.css";
import { memo, useState } from "react";
import useInfiniteScroll, {
  ScrollDirection,
} from "react-easy-infinite-scroll-hook";
import { createItems, loadMore } from "./utils";

export const Component = memo(function Component() {
  const [data, setData] = useState(createItems());
  const [isLoading, setIsLoading] = useState(false);

  const next = async (direction: ScrollDirection) => {
    try {
      setIsLoading(true);
      const newData = await loadMore();

      setData((prev) =>
        direction === "up" ? [...newData, ...prev] : [...prev, ...newData]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const ref = useInfiniteScroll({
    next,
    rowCount: data.length,
    hasMore: { down: true },
  });

  return (
    <div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="List"
        style={{
          height: 500,
          overflowY: "auto",
        }}
      >
        {data.map((key) => (
          <div className="Row" key={key}>
            {key}
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
});
