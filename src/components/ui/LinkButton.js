import Image from "next/image";

export const LinkButton = (props) => (
  <div className="border-b border-neutral-200 px-3 py-2 flex items-center gap-4 text-black font-normal cursor-pointer">
    {props.children}
    <Image width={8} height={8} src="/icons/chevron-right.svg" alt="chevron" />
  </div>
);
