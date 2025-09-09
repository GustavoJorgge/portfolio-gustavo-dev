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
  { name: "Cases", link: "#Projects" },
  { name: "Portfolio", link: "#Portfolio" },
  { name: "Contato", link: "#Contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    if (!hash.startsWith("#")) hash = `#${hash}`;

    if (location.pathname !== "/") {
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
