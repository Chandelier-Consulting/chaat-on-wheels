"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_SPRING = [0.34, 1.56, 0.64, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const softScale: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const group: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export function MotionSection({
  children,
  className,
  delay = 0,
  variant = "rise",
  ...props
}: ComponentProps<typeof motion.section> & {
  children: ReactNode;
  delay?: number;
  variant?: "rise" | "softScale";
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      variants={variant === "softScale" ? softScale : rise}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.68, delay, ease: EASE_OUT_EXPO }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionGroup({
  children,
  className,
  ...props
}: ComponentProps<typeof motion.div> & {
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={group}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  variant = "rise",
  ...props
}: ComponentProps<typeof motion.div> & {
  children: ReactNode;
  variant?: "rise" | "softScale";
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={variant === "softScale" ? softScale : rise}
      transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = "rise",
  amount = 0.2,
  ...props
}: ComponentProps<typeof motion.div> & {
  children: ReactNode;
  variant?: "rise" | "softScale";
  amount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={variant === "softScale" ? softScale : rise}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.58, ease: EASE_OUT_EXPO }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionLink({
  children,
  className,
  href,
  ...props
}: ComponentProps<typeof motion.a> & {
  children: ReactNode;
  href: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      href={href}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.22, ease: EASE_SPRING }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function MotionAnchor({
  children,
  className,
  href,
  ...props
}: ComponentProps<typeof motion.a> & {
  children: ReactNode;
  href: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      className={className}
      href={href}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.22, ease: EASE_SPRING }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
