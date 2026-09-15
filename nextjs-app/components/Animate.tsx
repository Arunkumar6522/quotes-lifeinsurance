"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: (d: number) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: (d: number) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } }),
  },
  none: {
    hidden: { opacity: 0 },
    show: (d: number) => ({ opacity: 1, transition: { duration: 0.5, delay: d, ease: "easeOut" } }),
  },
};

export default function Animate({ children, className, style, delay = 0, direction = "up", once = true }: Props) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const v      = variants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={v}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
