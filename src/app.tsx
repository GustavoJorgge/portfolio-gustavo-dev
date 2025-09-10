import About from "./components/about";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Project } from "./components/project";
import "@radix-ui/themes/styles.css";

export function App() {
  return (
    <div className="h-full w-full justify-center bg-black">
      <div className="w-full max-w-[1300px] mx-auto bg-black">
        <Header />
        <Home />
        <About />
        {/* <Stacks /> */}
        <Project />
      </div>
    </div>
  );
}
