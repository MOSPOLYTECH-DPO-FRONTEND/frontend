"use client";

import Image from "next/image";
import { HeaderButtons } from "@/app/components/sections/HeaderButtons";

export const HeaderSection = () => {
  return (
    <header className="py-8 bg-primary flex items-center justify-between">
      <div>
        <Image width={220} height={20} src="/imgs/logo.png" alt="logo" />
      </div>
      <HeaderButtons />
    </header>
  );
};
