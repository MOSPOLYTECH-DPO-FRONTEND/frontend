export default function SearchInput({
  placeholder = "Поиск",
  value = "",
  onChange,
  icon,
  className = "",
}) {
  return (
    <div className={`w-full bg-white ${className}`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-12 border-b border-gray-200">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-2 h-full text-md text-black placeholder:text-[#cccccc] placeholder:text-md font-light bg-transparent border-none outline-none w-full"
          />
          {icon && <div className="flex-shrink-0">{icon}</div>}
        </div>
      </div>
    </div>
  );
}
