import React from "react";
import clsx from "clsx";

export default function Badge({ children, variant = "primary", className }) {
  const variants = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={clsx(
        "inline-block px-2 py-1 rounded-full text-sm font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
