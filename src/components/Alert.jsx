import React from "react";

const typeClasses = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
};

export default function Alert({
  type = "info",
  message,
  onClose,
  showIcon = true,
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded ${typeClasses[type]}`}
    >
      <div className="flex items-center gap-2">
        {showIcon && (
          <span>
            {type === "success"
              ? "✔️"
              : type === "error"
              ? "❌"
              : type === "warning"
              ? "⚠️"
              : "ℹ️"}
          </span>
        )}
        <p>{message}</p>
      </div>
      {onClose && (
        <button className="ml-4 font-bold" onClick={onClose}>
          ✕
        </button>
      )}
    </div>
  );
}
