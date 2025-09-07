import { Code } from "@phosphor-icons/react";

export function Header() {
  return (
    <nav className="block w-full px-4 py-4 mx-auto bg-black bg-opacity-90 sticky shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-100 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-300">
        <div className="flex items-center justify-center gap-1.5">
          <div className="p-1 bg-green-600 rounded-full">
            <Code size={28} color="white" />
          </div>
          <a
            href="#"
            className="cursor-pointer py-1.5 text-2xl text-gray-300 font-semibold"
          >
            Gustavo Jorge
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 gap-x-2 text-gray-300">
              <a
                href="#"
                className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
              >
                Home
              </a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-gray-300">
              <a
                href="#"
                className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
              >
                Sobre Mim
              </a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-gray-300">
              <a
                href="#"
                className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
              >
                Projetos
              </a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-gray-300">
              <a
                href="#"
                className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
              >
                Portfolio
              </a>
            </li>
            <li className="flex items-center p-1 gap-x-2 text-gray-300">
              <a
                href="#"
                className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
