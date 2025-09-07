import { motion } from "motion/react";

export default function About() {
  return (
    <section className="w-full h-full min-h-[70vh] items-center justify-center  mx-auto my-12 bg-black bg-opacity-90 rounded-xl flex flex-col gap-4 text-white">
      <div>
        <h2 className="mb-1 font-inter text-3xl md:text-4xl font-medium from-gray-100 flex justify-center items-center">
          Sobre <span className="text-green-400">Mim</span>
        </h2>
        <p className="text-gray-400 text-center mb-4 font-inter text-base md:text-sm">
          Um pouco sobre mim e minhas habilidades como Desenvolvedor.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex justify-center items-center">
          <motion.button
            initial={false}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src="/assets/img/profile.jpg"
              alt="Foto de Perfil"
              className=" md:w-full md:h-[28rem] max-w-[28rem] rounded-2xl object-cover border border-gray-600"
            />
          </motion.button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center border rounded-2xl border-gray-600 p-6 md:min-h-[28rem]">
          {/* Pessoal */}
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
          {/* Profissional */}
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
              Minha ambição é crescer profissionalmente e técnicamente, para
              alcançar ser um bom arquiteto de software e planejar soluções
              escaláveis e eficientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
