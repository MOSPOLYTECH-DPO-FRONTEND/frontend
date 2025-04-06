import { TextSection } from "@/app/components/sections/TextSection";
import { ButtonsSection } from "@/app/components/sections/ButtonsSection";
import { QuizSection } from "@/app/components/sections/QuizSection";
import { HeaderSection } from "@/app/components/sections/HeaderSection";

export default function Home() {
  return (
    <section className="text-white font-bold">
      <div className="px-32 pb-32 bg-[url(/imgs/main_bg.png)] object-cover bg-center bg-cover">
        <HeaderSection />
        <div className="mt-20">
          <TextSection />
          <ButtonsSection />
        </div>
      </div>
      <div className="px-32 pb-32">
        <QuizSection />
      </div>
    </section>
  );
}
