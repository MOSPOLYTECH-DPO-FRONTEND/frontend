export const ButtonComponent = (props) => {
  const buttonColorsClassNames = {
    primary: "bg-[var(--color-primary)] text-white",
    white: "bg-white text-black",
    transparent: "bg-transparent",
  };

  const baseClasses =
    "font-medium flex justify-between items-center gap-3 w-full flex items-center justify-center";
  const colorClass =
    buttonColorsClassNames[props.color] || buttonColorsClassNames.primary;
  const cursorClass = props.disabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const paddingClass = props.noPadding ? "" : "px-8 py-3";

  return (
    <button
      disabled={props.disabled}
      className={`${baseClasses} ${colorClass} ${cursorClass} ${paddingClass}`}
      onClick={props.onClick}
    >
      {props.prefix && <div>{props.prefix}</div>}
      <div>{props.children}</div>
      {props.suffix && <div>{props.suffix}</div>}
    </button>
  );
};
