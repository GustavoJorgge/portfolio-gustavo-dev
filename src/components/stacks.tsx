export default function Stacks() {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {/* Front-end */}
      <div className="flex-1 bg-black bg-opacity-80 rounded-lg p-6 border border-gray-600">
        <h3 className="text-2xl font-bold mb-4 text-gray-300 text-center">
          Front-end
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "React.js",
            "Next.js",
            "Redux",
            "TailwindCSS",
            "TypeScript",
            "JavaScript",
            "Context API",
            "Shadcn",
            "Styled Components",
            "Vitest",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 rounded-full bg-green-950 text-gray-200 font-semibold text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Back-end */}
      <div className="flex-1 bg-black bg-opacity-80 rounded-lg p-6 border border-gray-600">
        <h3 className="text-2xl font-bold mb-4 text-gray-300 text-center">
          Back-end
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "Node.js",
            "Fastify",
            "MongoDB",
            "PostgreSQL",
            "REST API",
            "Drizzle ORM",
            "Prisma ORM",
            "Java",
            "Spring Boot",
            "Cypress",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 rounded-full bg-green-950 text-gray-200 font-semibold text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* DevOps */}
      <div className="flex-1 bg-black bg-opacity-80 rounded-lg p-6 border border-gray-600">
        <h3 className="text-2xl font-bold mb-4 text-gray-300 text-center">
          DevOps
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {["GitHub Actions", "AWS", "Docker", "CI/CD", "Deployments"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full bg-green-950 text-gray-200 font-semibold text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
