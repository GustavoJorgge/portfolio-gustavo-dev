"use client";

import { motion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
  icon?: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  variants?: Variants;
  children?: React.ReactNode; // ✅ força a tipagem correta
}

export function Button({
  icon,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  variants,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "px-6 py-2 rounded-full border border-gray-500 text-white font-semibold shadow hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2",
        className
      )}
      variants={
        variants || {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
        }
      }
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </motion.a>
  );
}
