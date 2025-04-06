import Image from "next/image";

export const DropdownButton = (props) => {
  return (
    <button
      className="text-black flex gap-4 px-3 py-2 text-lg font-medium border-b border-neutral-200"
      onClick={props.onClick}
    >
      {props.children}
      <Image
        src="/icons/chevron_down.svg"
        width={12}
        height={12}
        alt="chevron down"
      />
    </button>
  );
};
