import React, { memo, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Virtual } from "swiper/modules";

export const Component = memo(function Component() {
  // 二次元配列でスライド情報を管理
  const [slides, setSlides] = useState([
    ["🐱 Slide 1", "✨ 追加情報 A", "📅 2025/02/22"],
  ]);
  const swiperRef = React.useRef<SwiperRef>(null);

  // スライドを追加する関数
  const addSlide = () => {
    const newIndex = slides.length + 1;
    setSlides([
      ...slides,
      [
        `🐾 Slide ${newIndex}`,
        `✨ 追加情報 ${String.fromCharCode(64 + newIndex)}`,
        `📅 2025/02/${22 + newIndex}`,
      ],
    ]);
    // 新しいスライドを追加した後に、swiper のインスタンスを使って「次のスライドに進む」
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  // スライドを削除する関数
  const removeSlide = (index: number) => {
    setSlides(slides.filter((_, i) => i !== index));
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={1}
        allowTouchMove={false}
        virtual
      >
        {slides.map((data, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-lg font-bold">{data[0]}</h2>
              <p className="text-sm text-gray-600">{data[1]}</p>
              <p className="text-xs text-gray-400">{data[2]}</p>
              {index !== 0 && (
                <button
                  onClick={() => removeSlide(index)}
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  🗑 削除するにゃん！
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="mt-4 flex gap-2">
        <button
          onClick={addSlide}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          🐾 スライドを追加するにゃん！
        </button>
      </div>
    </div>
  );
});
