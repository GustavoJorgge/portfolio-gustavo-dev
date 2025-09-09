import { GithubLogoIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Technologies from "./technologies";

export function Home() {
  return (
    <section className="flex flex-col min-h-screen px-4 py-12 md:py-20 items-center justify-center">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1 * 0.1,
            ease: "easeInOut",
          }}
        >
          <h2 className="mb-4 font-inter text-2xl md:text-4xl font-medium bg-gradient-to-r from-gray-100 to-green-700 bg-clip-text text-transparent">
            Eae, dev! Eu sou Gustavo Jorge.
          </h2>

          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white">
            Full-Stack
          </h1>
          <h1 className="mb-4 font-bold text-5xl md:text-7xl lg:text-8xl text-green-500">
            Web Developer
          </h1>
          <p className="mb-8 text-gray-200 font-semibold text-base md:text-lg max-w-xl mx-auto px-2">
            Desenvolvedor Full-Stack com expertise em front-end. Transformo
            ideias em aplicações web performáticas, escaláveis e centradas no
            usuário.
          </p>
        </motion.span>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3, // intervalo entre cada botão
              },
            },
          }}
        >
          <motion.a
            href="#contact"
            className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 10, x: 0, transition: { duration: 0.9 } },
            }}
          >
            Contato
          </motion.a>

          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-gray-500 text-white font-semibold shadow hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
            }}
          >
            <GithubLogoIcon size={20} />
            Github
          </motion.a>
        </motion.div>

        <div className="mt-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 80 }} // começa invisível e deslocado para baixo
            animate={{ opacity: 1, y: 0 }} // sobe para a posição final
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <Technologies />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
