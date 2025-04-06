import Image from "next/image";

export const FormCardComponent = (props) => {
  return (
    <div className="p-8 bg-neutral-200 max-w-[400px] flex flex-col">
      <div className="flex justify-between font-medium text-neutral-400 text-sm">
        <span>Активный отдых</span>
        <span>Очень сложный</span>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold leading-tight">
          Инженер Мототехники
          <br />
          длинное название
        </h2>
      </div>
      <div className="mt-4 font-medium text-sm text-neutral-400">
        <p>Конструируйте мотоциклы. Путешествуйте по России и миру</p>
      </div>

      <div className="mt-4 grow">
        <Image
          src="/imgs/moto.png"
          alt="Мотоциклист"
          width={100}
          height={340}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
