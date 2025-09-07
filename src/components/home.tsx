import { GithubLogoIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className=" flex flex-col items-center justify-center min-h-[70vh] bg-black bg-opacity-95 text-center">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <h2 className="mb-5  font-inter text-4xl font-medium bg-gradient-to-r from-gray-100 to-green-700 bg-clip-text text-transparent">
          Eae, dev! Eu sou Gustavo Jorge.
        </h2>
        <h1 className=" font-bold text-8xl  text-white">Full-Stack</h1>
        <h1 className="mb-4 font-bold text-8xl  text-green-600">
          Web Developer
        </h1>
        <p className="mb-8 text-gray-200 font-semibold text-base max-w-xl mx-auto">
          Desenvolvedor Full-Stack com expertise em front-end. Transformo ideias
          em aplicações web performáticas, escaláveis e centradas no usuário.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors duration-300"
          >
            Contato
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-gray-500 text-white font-semibold shadow hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
          >
            <GithubLogoIcon size={20} />
            Github
          </a>
        </div>
      </motion.button>
    </section>
  );
}
