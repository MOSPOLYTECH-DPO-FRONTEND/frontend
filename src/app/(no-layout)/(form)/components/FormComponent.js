"use client";

import SearchInput from "@/components/ui/InputComponent";
import { CheckboxComponent } from "@/components/ui/CheckboxComponent";
import { ButtonComponent } from "@/components/ui/ButtonComponent";

export const FormComponent = (props) => {
  return (
    <div className="p-8 bg-white min-w-[450px] flex flex-col">
      <h1 className="mt-2 text-3xl font-medium">Записаться</h1>
      <div className="mt-8 grow flex flex-col justify-between">
        <SearchInput placeholder="Университет*" />
        <SearchInput placeholder="Группа*" />
        <SearchInput placeholder="ФИО*" />
        <SearchInput placeholder="Телефон*" />
        <SearchInput placeholder="Email*" />
      </div>
      <div className="font-medium ml-4 mt-10 flex items-center gap-4">
        <CheckboxComponent />
        <div>
          Согласен с &nbsp;
          <a className=" text-red-500 underline">офертой</a>
        </div>
      </div>
      <div className="mt-10 flex gap-4">
        <div className="grow">
          <ButtonComponent class="grow" disabled>
            Назад
          </ButtonComponent>
        </div>
        <div className="grow">
          <ButtonComponent className="grow">Далее</ButtonComponent>
        </div>
      </div>
    </div>
  );
};
