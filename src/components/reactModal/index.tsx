import React, { memo } from "react";
import Modal from "react-modal";
import "./index.css";

export type Props = {
  onClickCloseButton?: () => void;
  isOpen: boolean;
};
export const Component = memo<Props>(function Component({
  onClickCloseButton,
  isOpen,
}) {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onClickCloseButton}
      contentLabel="Test"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(128, 128, 128, 0.75)",
        },
        content: {
          position: "absolute",
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
      <p>Modal Content</p>
    </Modal>
  );
});
