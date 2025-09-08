// import { Code } from "@phosphor-icons/react";

// export function Header() {
//   return (
//     <nav className="block w-full px-4 py-4 mx-auto bg-black bg-opacity-90 sticky shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-100 z-[9999]">
//       <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-300">
//         <div className="flex items-center justify-center gap-1.5">
//           <div className="p-1 bg-green-600 rounded-full">
//             <Code size={28} color="white" />
//           </div>
//           <a
//             href="#"
//             className="cursor-pointer py-1.5 text-2xl text-gray-300 font-semibold"
//           >
//             Gustavo Jorge
//           </a>
//         </div>
//         <div className="hidden lg:block">
//           <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//             <li className="flex items-center p-1 gap-x-2 text-gray-300">
//               <a
//                 href="#"
//                 className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="flex items-center p-1 gap-x-2 text-gray-300">
//               <a
//                 href="#"
//                 className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
//               >
//                 Sobre Mim
//               </a>
//             </li>
//             <li className="flex items-center p-1 gap-x-2 text-gray-300">
//               <a
//                 href="#"
//                 className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
//               >
//                 Projetos
//               </a>
//             </li>
//             <li className="flex items-center p-1 gap-x-2 text-gray-300">
//               <a
//                 href="#"
//                 className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li className="flex items-center p-1 gap-x-2 text-gray-300">
//               <a
//                 href="#"
//                 className="flex items-center text-[var(--font-size-lg)] font-semibold transition-colors duration-200 hover:text-green-500"
//               >
//                 Contato
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button
//           className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
//           type="button"
//         >
//           <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </span>
//         </button>
//       </div>
//     </nav>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "./ui/resizable-navbar";

const items = [
  { name: "Home", link: "#Home" },
  { name: "Sobre Mim", link: "#About" },
  { name: "Projetos", link: "#Projects" },
  { name: "Portfolio", link: "#Portfolio" },
  { name: "Contato", link: "#Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    // Garantir que o hash comece com '#'
    if (!hash.startsWith("#")) hash = `#${hash}`;

    if (location.pathname !== "/") {
      // Se não está na home, navega para a home com hash (ex: /#About)
      navigate("/" + hash);
    } else {
      // Se já está na home, rola suavemente para a seção
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback: atualiza o hash do browser para permitir navegação por âncora
        window.location.hash = hash;
      }
    }
  };

  // Quando a rota mudar para '/' com hash (ex: navegou de outra página), tenta rolar
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // pequeno atraso para garantir que o DOM esteja pronto
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />

        <div className="flex gap-4">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.link)}
              className="text-base text-neutral-200/80 hover:text-neutral-200"
            >
              {item.name}
            </button>
          ))}
        </div>

        <NavbarButton href="/assets/cv/gustavo-jorge-dev.pdf" download>
          Currículo PDF
        </NavbarButton>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded-md hover:bg-neutral-800 transition text-white"
          >
            {menuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </MobileNavHeader>

        <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          {items.map((item) => (
            <button
              key={item.link}
              onClick={() => {
                handleNavClick(item.link);
                setMenuOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-neutral-200"
            >
              {item.name}
            </button>
          ))}

          <NavbarButton
            href="/resume/Full-Stack-cv.pdf"
            download
            className="mt-4 w-full"
          >
            My Resume
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
