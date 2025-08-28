import Modal from "../components/Modal";
import { useState } from "react";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      title="Example Modal"
      footer={
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      }
    >
      <p>
        This is the modal content. You can add forms, text, or anything else.
      </p>
    </Modal>
  );
};
