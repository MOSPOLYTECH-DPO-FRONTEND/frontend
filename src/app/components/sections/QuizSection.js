"use client";
import { ButtonComponent } from "@/components/ui/ButtonComponent";
import { CheckboxComponent } from "@/components/ui/CheckboxComponent";
import { LinkButton } from "@/components/ui/LinkButton";
import { useRouter } from "next/navigation";

export const QuizSection = () => {
  const questions = [
    {
      text: "Профессиональные навыки (Hard skills): технические,программирование, инжиниринг",
      checked: false,
    },
    {
      text: "Управленческие навыки (Soft Skills): управление проектами, маркетинг, бизнес-анализ",
      checked: false,
    },
    {
      text: "Креативные навыки (Art Skills): дизайн, искусство, 3D-моделирование",
      checked: false,
    },
    {
      text: "Цифровые навыки (Digital Skills): ИТ, искусственный интеллект, большие данные",
      checked: false,
    },
  ];

  const router = useRouter();

  const handleNext = () => {
    router.push("/studying");
  };

  const list = questions.map((question, index) => (
    <div key={index} className="flex gap-4">
      <CheckboxComponent
        checked={question.checked}
        onChange={() => (question.checked = !question.checked)}
      />
      {question.checked}
      <div>{question.text}</div>
    </div>
  ));

  return (
    <div className="flex -mt-10 w-full">
      <div className="bg-[var(--color-primary)] px-12 py-8 max-w-[500px]">
        <h2 className="text-6xl ">Не можете выбрать?</h2>
        <div className="text-sm mt-8 font-normal">
          Пройдите краткий опрос, и мы быстро сможем подобрать вам программу
        </div>
      </div>

      <div className="bg-white text-black grow px-12 py-8">
        <h3 className="text-2xl text-normal">
          В какой сфере Вы хотите развивать свои компетенции?
        </h3>
        <div className="flex flex-col gap-8 font-medium">
          <div className="mt-8"></div>

          {list}
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex gap-4 ">
            <ButtonComponent disabled>Назад</ButtonComponent>
            <ButtonComponent>Далее</ButtonComponent>
          </div>
          <div onClick={handleNext}>
            <LinkButton>Посмотреть 616 ДПО</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
