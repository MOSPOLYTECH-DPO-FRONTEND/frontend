import Image from "next/image";

export const AsideComponent = () => {
  return (
    <aside className="flex-shrink-0 px-4 py-[30px] h-screen flex flex-col justify-between sticky top-0 text-[var(--color-menu-foreground)] bg-[var(--color-menu-background)] ">
      <div>
        <Image src="/icons/burger.svg" alt="logo" width={30} height={30} />
      </div>

      <div>
        <Image src="/imgs/logo_round.png" alt="logo" width={30} height={30} />
      </div>
    </aside>
  );
};
