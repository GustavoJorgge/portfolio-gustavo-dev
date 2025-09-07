export default function Technologies() {
  const stacks = [
    {
      name: "React",
      img: "/assets/react.svg",
    },
    {
      name: "Node",
      img: "/assets/nodejs.svg",
    },
    {
      name: "Docker",
      img: "/assets/docker.svg",
    },
    {
      name: "Tailwind",
      img: "/assets/tailwind.svg",
    },
    {
      name: "AWS",
      img: "/assets/aws.svg",
    },
    {
      name: "Postgres",
      img: "/assets/postgresql.svg",
    },
    {
      name: "TypeScript",
      img: "/assets/typescript.svg",
    },
    {
      name: "Figma",
      img: "/assets/figma.svg",
    },
  ];

  return (
    <section className="flex h-full w-full text-m flex-col items-center justify-center gap-4 bg-black text-white">
      <h2
        style={{ fontSize: "var(--font-size-lg)" }}
        className="font-semibold text-gray-300 mb-4 justify-center items-center"
      >
        Principais Técnologias
      </h2>
      <div className="w-full md:w-3/4 md:px-0 px-4">
        <div className="w-full animate-slide-infinite inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
          <ul className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infine-scroll">
            {stacks.map((stack) => (
              <li
                key={stack.name}
                className="flex flex-row justify-center items-center"
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  width={30}
                  height={30}
                  className="filter invert hover:fill-emerald-800"
                />
                <span className="ml-2 font-semibold ">{stack.name}</span>
              </li>
            ))}
            {stacks.map((stack) => (
              <li
                key={stack.name + "-dup"}
                className="flex flex-row justify-center items-center"
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  width={30}
                  height={30}
                  className="filter invert hover:fill-emerald-800"
                />
                <span className="ml-2 font-semibold ">{stack.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
