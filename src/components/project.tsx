import { GithubLogoIcon } from "@phosphor-icons/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function Project() {
  const projects = [
    {
      title: "Ceci Nutricionista",
      description: "Site desenvolvido para venda de Planos Nutricionais.",
      technologies: [
        "Vite",
        "React",
        "Styled Components",
        "Motion",
        "Phosphor-icons",
        "Vercel",
        "CI/CD",
        "Integrações",
      ],
      imageUrl: "/assets/img/111.jpg",
      githubUrl: "#",
      liveUrl: "#",
      alt: "Projeto - Ceci Nutricionista",
      delay: "0s",
    },
    {
      title: "Fit Criativ",
      description:
        "E-commerce desenvolvido para uma loja de acessórios Fitness.",
      technologies: ["Shopify", "CSS", "Melhor Envio", "Pagar.me", "Hostinger"],
      imageUrl: "/assets/img/111.jpg",
      liveUrl: "#",
      alt: "E-commerce para loja de acessórios Fitness",
      delay: "0.2s",
    },
    {
      title: "Integração Voke",
      description:
        "Sustentação e Construção de Páginas que integram com CRM para geração de Leads.",
      technologies: [
        "Vite",
        "Node.js",
        "API REST",
        "Marketing Cloud",
        "N8N",
        "Azure Pipelines",
        "AWS",
        "CI/CD",
        "SCRUM",
      ],
      imageUrl: "/assets/cases/Voke.png",
      liveUrl: "https://voke.tech",
      alt: "Projeto Integração Voke",
      delay: "0.4s",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black bg-opacity-90">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Meus <span className="text-green-400">Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos meus projetos recentes como Desenvolvedor Full-Stack.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-gray-900 border-0 shadow-lg hover:shadow-green-500/30 transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: project.delay }}
            >
              {/* Imagem */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.alt || project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Button
                        href="#"
                        className="bg-green-400 text-black hover:bg-green-500"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href="#"
                        className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <GithubLogoIcon className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-400/10 text-green-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            href="https://github.com/GustavoJorgge"
            className="bg-green-800 border-transparent hover:opacity-90 hover:border-gray-600 transform hover:scale-105 transition-all duration-300 shadow-glow px-8 py-4 w-auto"
          >
            <GithubLogoIcon className="w-5 h-5 mr-2" />
            Ver Mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
