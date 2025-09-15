import { socialMedia } from "../api/data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl px-5 py-4 md:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <p className="md:text-base text-sm text-gray-200 font-light">
          © 2025 Gustavo Jorge. Todos Direitos Reservados.
        </p>

        <div className="hidden md:flex items-center gap-6 mt-6 ">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              className="flex justify-center items-center text-gray-200 hover:text-white transition-all"
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
