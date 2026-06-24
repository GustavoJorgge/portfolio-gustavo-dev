import About from "./components/aboutSection/about";
import { Contact } from "./components/contactSection/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./components/homeSection/home";
import { Project } from "./components/projectSection/project";
import "@radix-ui/themes/styles.css";

export function App() {
  return (
    <div className="h-full w-full justify-center bg-black">
      <div className="w-full max-w-[1300px] mx-auto bg-black">
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
