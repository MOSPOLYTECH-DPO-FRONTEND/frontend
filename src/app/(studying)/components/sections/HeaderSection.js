import { HeaderButtons } from "@/app/components/sections/HeaderButtons";

export const HeaderSection = (props) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl">Маркетплейс ДПО</h1>

      <div>
        <HeaderButtons />
      </div>
    </div>
  );
};
