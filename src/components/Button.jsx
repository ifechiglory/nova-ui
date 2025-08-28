export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
}) {
  const baseClasses = "rounded-lg font-semibold focus:outline-none transition";
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-400 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
