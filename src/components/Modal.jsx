import React from "react";

export default function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div className="mb-4">{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
