"use client";

import { HeaderSection } from "@/app/(studying)/components/sections/HeaderSection";
import { SearchSection } from "@/app/(studying)/components/sections/SearchSection";
import CardComponent from "@/app/(studying)/components/CardComponent";

export default function StudyingPage() {
  const array = Array.from({ length: 12 });

  return (
    <section className="bg-white text-black font-bold px-32 py-8">
      <HeaderSection />
      <SearchSection />
      <div className="mt-20 grid grid-cols-4 gap-8">
        {array.map((_, i) => (
          <CardComponent key={i} />
        ))}
      </div>
    </section>
  );
}
