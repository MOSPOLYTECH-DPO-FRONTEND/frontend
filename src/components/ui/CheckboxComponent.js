"use client";

import { useState } from "react";
import Image from "next/image";

export const CheckboxComponent = ({ checked, onChange }) => {
  const [state, setState] = useState(false);

  return (
    <div
      className={`flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer border-black
        ${state && "bg-[var(--color-primary)] "}`}
      onClick={() => setState((checked) => !checked)}
    >
      {state && <Image width={18} height={18} src="/icons/check.svg" alt="" />}
    </div>
  );
};
