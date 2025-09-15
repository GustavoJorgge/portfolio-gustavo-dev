import { motion } from "framer-motion";
import { MessageCircleCode } from "lucide-react";
import { Button } from "./ui/button";
import { GithubLogoIcon } from "@phosphor-icons/react";

export function Contact() {
  return (
    <section
      id="Contato"
      className="w-full flex justify-center items-center my-12 p-5"
    >
      <motion.div
        className="w-full  bg-[#18181b] rounded-3xl px-6 py-12 flex flex-col items-center shadow-lg"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-4xl font-bold text-white">
            Entre em <span className="text-green-400">Contato</span>
          </h2>
          <h3 className="text-xl md:text-xl  text-white mb-3">
            Para trabalharmos novas ideias.
          </h3>
          <div className="w-20 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <motion.a>
          <Button
            href="https://wa.me/5531994603457"
            className="bg-green-800 border-transparent hover:opacity-90 hover:green-gray-600 transform hover:scale-105 transition-all duration-300 shadow-glow px-8 py-4 w-auto"
          >
            <MessageCircleCode className="w-5 h-5 mr-2" />
            Vamos Conversar
          </Button>
        </motion.a>
      </motion.div>
    </section>
  );
}
