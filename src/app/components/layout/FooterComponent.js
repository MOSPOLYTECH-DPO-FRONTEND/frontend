import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="text-white text-sm bg-[var(--color-menu-background)]">
      <div className="container mx-auto px-4 py-8">
        <div className="font-bold grid grid-cols-1 md:grid-cols-4 gap-8 font-bold font-['Verdana']">
          <div className="space-y-8">
            <Link href="#" className="block hover:text-neutral-300">
              ПОСТУПАЮЩИМ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              ОБУЧАЮЩИМСЯ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              РАБОТНИКАМ
            </Link>
          </div>

          <div className="space-y-8">
            <Link href="#" className="block hover:text-neutral-300">
              ОБ УНИВЕРСИТЕТЕ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              ФАКУЛЬТЕТЫ И ИНСТИТУТЫ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              ДОВУЗОВСКОЕ ОБРАЗОВАНИЕ
            </Link>
          </div>

          <div className="space-y-8">
            <Link href="#" className="block hover:text-neutral-300">
              НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              МЕЖДУНАРОДНАЯ ДЕЯТЕЛЬНОСТЬ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              СВЕДЕНИЯ О ДОХОДАХ
            </Link>
          </div>

          <div className="space-y-8">
            <Link href="#" className="block hover:text-neutral-300">
              СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ
            </Link>
            <Link href="#" className="block hover:text-neutral-300">
              ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ
            </Link>
            <div className="flex items-center mt-6">
              <Link
                href="#"
                className="flex items-center hover:text-neutral-300"
              >
                Новости университета
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between">
          <div className="text-neutral-400">
            <p>Министерство науки</p>
            <p>и высшего образования РФ</p>
          </div>
          <div className="text-neutral-400 mt-4 md:mt-0">
            <p>Министерство просвещения РФ</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>

        <div className="mt-8 text-neutral-400">
          <p>
            © 2025 федеральное государственное автономное образовательное
            учреждение
          </p>
          <p>высшего образования «Московский политехнический университет»,</p>
          <p>Московский Политех</p>
        </div>
      </div>
    </footer>
  );
}
