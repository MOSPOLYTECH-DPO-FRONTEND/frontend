"use client";

import { ButtonComponent } from "@/components/ui/ButtonComponent";
import Image from "next/image";

export const HeaderButtons = () => {
  const telegramIcon = (
    <Image src="/icons/telegram.svg" alt="telegram" width={20} height={20} />
  );

  return (
    <div className="flex items-center justify-between gap-16">
      <div>
        <ButtonComponent> Подобрать ДПО </ButtonComponent>
      </div>
      <div>+7 499 999 99 99</div>

      <div className="flex items-center justify-between">
        <ButtonComponent noPadding color="transparent" prefix={telegramIcon}>
          Подобрать ДПО
        </ButtonComponent>
      </div>
    </div>
  );
};
