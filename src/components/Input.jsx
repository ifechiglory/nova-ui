export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  );
}
