export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  alt?: string;
  delay: string;
  status: "em-desenvolvimento" | "concluido";
}
