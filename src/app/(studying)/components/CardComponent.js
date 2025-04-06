import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardComponent() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/form");
  };
  return (
    <div className="max-w-sm overflow-hidden bg-[var(--card-color)]">
      <div className="flex justify-between px-4 pt-4 font-medium text-neutral-400 text-sm">
        <span>Активный отдых</span>
        <span>Очень сложный</span>
      </div>
      <div className="px-4 pt-2">
        <h2 className="text-2xl font-bold leading-tight">
          Инженер Мототехники
          <br />
          длинное название
        </h2>
      </div>
      <div className="px-4 pt-2 font-medium text-neutral-400">
        <p>Конструируйте мотоциклы. Путешествуйте по России и миру</p>
      </div>
      <div className="pl-4 pt-4">
        <Image
          src="/imgs/moto.png"
          alt="Мотоциклист"
          width={400}
          height={250}
          className="w-full h-auto"
        />
      </div>
      <div className="p-4">
        <div
          className="mt-4 border-b border-neutral-200 px-3 py-2 flex items-center justify-between text-black font-medium cursor-pointer"
          onClick={handleNext}
        >
          <div className="text-2xl">от 7600 рублей / мес.</div>
          <Image
            width={12}
            height={12}
            src="/icons/chevron-right.svg"
            alt="chevron"
          />
        </div>
      </div>
    </div>
  );
}
