import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { MessageCircleCode } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full flex justify-center items-center my-12 p-5">
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
        <motion.a
          href="https://wa.me/5531994603457"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-3 border border-green-300 rounded-xl text-lg font-inter text-white hover:bg-green-400 hover:text-black transition-colors flex items-center gap-2 shadow-none outline-none focus:ring-2 focus:ring-purple-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Vamos Conversar
          <MessageCircleCode size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
}
