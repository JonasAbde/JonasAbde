import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${hover ? "glass-hover" : ""} ${onClick ? "cursor-pointer" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
