"use client";

import { motion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  variants?: Variants;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { icon, className, variants, children, disabled = false } = props;

  const defaultVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const baseClassName = cn(
    "px-6 py-2 rounded-full border border-gray-500 text-white font-semibold shadow hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2",
    disabled && "opacity-50 cursor-not-allowed hover:bg-transparent",
    className
  );

  if ("href" in props && props.href && !disabled) {
    return (
      <motion.a
        href={props.href}
        target={props.target || "_blank"}
        rel={props.rel || "noopener noreferrer"}
        className={baseClassName}
        variants={variants || defaultVariants}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClassName}
      variants={variants || defaultVariants}
      disabled={disabled}
      onClick={
        disabled ? undefined : "onClick" in props ? props.onClick : undefined
      }
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </motion.button>
  );
}
