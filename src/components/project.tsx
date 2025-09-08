import { ArrowRight } from "@phosphor-icons/react";

export function Project() {
  const projects = [
    {
      title: "Ceci Nutricionista",
      description: "Site desenvolvido para venda de Planos Nutricionais.",
      imageUrl: "/assets/img/111.jpg",
      alt: "Projeto - Ceci Nutricionista",
    },
    {
      title: "Fit Criativ",
      description:
        "E-commerce desenvolvido para uma loja de acessorios Fitness.",
      imageUrl: "/assets/img/111.jpg",
      alt: "E-commerce para loja de acessorios Fitness",
    },
    {
      title: "Uploade Image",
      description: "Projeto Full Stack - Autoral para upload de imagens.",
      imageUrl: "/assets/img/111.jpg",
      alt: "Projeto Upload Imagens",
    },
  ];

  return (
    <div className="w-full h-full mt-3 p-5 items-center justify-centermy-12 bg-black bg-opacity-90 flex flex-col gap-4 text-white">
      <div>
        <h2 className="mb-1 font-inter text-3xl md:text-4xl font-medium flex justify-center items-center">
          Meus <span className="text-green-400 ml-2">Projetos</span>
        </h2>
        <p className="text-gray-400 text-center mb-4 font-inter text-base md:text-sm">
          Alguns dos meus projetos recentes como Desenvolvedor Full-Stack.
        </p>
      </div>

      <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[4px] hover:bg-gray-900 transition-colors shadow-xl/30 hover:shadow-gray-500/50 duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.alt || project.title}
              className="w-full h-60 object-cover rounded-[4px] mb-2"
            />
            <div className="flex flex-row justify-between items-start p-4">
              <div>
                <h3 className="text-[1rem] font-semibold">{project.title}</h3>
                <p className="text-[0.8rem] text-gray-300">
                  {project.description}
                </p>
              </div>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-500 text-white font-semibold shadow hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-1"
              >
                Saiba Mais
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
