"use client";

import SearchInput from "@/components/ui/InputComponent";
import { useState } from "react";
import { DropdownButton } from "@/components/ui/DropdownButton";
import Image from "next/image";

export const SearchSection = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const buttons = [
    "Все темы",
    "Любой бюджет",
    "Любая продолжительность",
    "Что-то",
    "Что-то",
  ];

  const SearchIcon = (
    <Image src="/icons/search.svg" alt="search" width={36} height={36}></Image>
  );

  return (
    <div className="mt-16 flex justify-between">
      <div className="flex flex-wrap w-1/2 gap-x-16 gap-y-4">
        {buttons.map((button, i) => (
          <DropdownButton key={i}>{button}</DropdownButton>
        ))}
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="w-[480px]">
          <SearchInput
            value={searchValue}
            onChange={setSearchValue}
            icon={SearchIcon}
          />
        </div>
      </div>
    </div>
  );
};
