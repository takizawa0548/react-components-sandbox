import React, { memo, useRef } from "react";
import "./index.css";
import Draggable from "react-draggable";
import Modal from "react-modal";
export type Props = {
  onClickCloseButton?: () => void;
  isOpen: boolean;
};
export const Component = memo<Props>(function Component({
  onClickCloseButton,
  isOpen,
}) {
  const myRef = useRef<HTMLParagraphElement>(null);
  return (
    // Draggableで要素をラップする
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onClickCloseButton}
      contentLabel="Test"
      style={{
        overlay: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(128, 128, 128, 0.75)",
        },
        content: {
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "50px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <Draggable nodeRef={myRef}>
        <p ref={myRef}>クリックしたら移動する文字なんやで</p>
      </Draggable>
    </Modal>
  );
});
