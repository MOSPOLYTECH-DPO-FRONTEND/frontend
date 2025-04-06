import { LinkButton } from "@/components/ui/LinkButton";

export const ButtonsSection = () => {
  const buttons = [
    "Популярное",
    "Аналитика",
    "Дизайн",
    "Программирование",
    "Маркетинг",
    "Управление",
    "Финансы",
    "Создание игр",
    "Кино и музыка",
    "Маркетплейсы",
    "Инженерия",
    "Оператор БПЛА",
    "Психология",
    "Здоровье",
    "Английский язык",
  ];

  return (
    <div className="mt-30 bg-white w-full p-8 flex flex-wrap gap-x-16 gap-y-8">
      {buttons.map((button, index) => (
        <LinkButton key={index}>{button}</LinkButton>
      ))}
    </div>
  );
};
