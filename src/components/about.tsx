import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Stacks from "./stacks";

export default function About() {
  // Lista de fotos
  const profilesImg = [
    { src: "/assets/img/eu.jpeg", alt: "Foto 1" },
    { src: "/assets/img/eu2.jpeg", alt: "Foto 2" },
    { src: "/assets/img/eu4.jpeg", alt: "Foto 2" },
    { src: "/assets/img/profile.jpg", alt: "Foto 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profilesImg.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [profilesImg.length]);

  return (
    <motion.section
      id="About"
      className="w-full h-full items-center justify-center mx-auto rounded-xl flex flex-col gap-5 text-white p-4"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Sobre <span className="text-green-400">Mim</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Um pouco sobre mim e minhas habilidades como Desenvolvedor.
        </p>
        <div className="w-20 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <motion.div
          className="flex justify-center items-center relative w-full md:w-[28rem] md:h-[28rem] max-w-[28rem] overflow-hidden rounded-2xl border border-gray-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={profilesImg[currentIndex].src}
              src={profilesImg[currentIndex].src}
              alt={profilesImg[currentIndex].alt}
              className="w-full h-full object-cover rounded-2xl"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col justify-center items-center border rounded-2xl border-gray-600 p-6 md:min-h-[28rem]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <h3 className="text-xl text-center font-bold text-gray-300 mb-2">
              Pessoal
            </h3>

            <p className="mb-2 text-gray-300 leading-relaxed font-inter">
              Sou uma pessoa extrovertida que gosta de fazer trilhas, seguindo
              um estilo de vida overland. Jogo vôlei, sou comunicativo e tenho
              facilidade de aprendizado. Gosto de desafios, de estar em contato
              com a natureza e de compartilhar experiências com amigos.
            </p>
          </div>
          <div className="mb-2">
            <h3 className="text-xl text-center font-bold text-gray-300 mb-2">
              Profissional
            </h3>
            <p className="text-gray-300 leading-relaxed font-inter">
              Sou um Desenvolvedor Full Stack, com expertise em Front-end. Adoro
              criar soluções inovadoras e entregar produtos de alta qualidade,
              sempre focando na experiência do usuário. Capaz de entregar
              códigos limpos, sustentáveis e com documentação atualizada. Seja
              criando interfaces ou construindo APIs robustas, estou sempre
              buscando aprender novas tecnologias e arquiteturas para entregar
              projetos de alta qualidade.
              <br />
              Minha ambição é crescer profissionalmente e tecnicamente, para
              alcançar ser um bom arquiteto de software e planejar soluções
              escaláveis e eficientes.
            </p>
          </div>
        </motion.div>
      </div>
      <Stacks />
    </motion.section>
  );
}
