import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

function CountUp({ value, duration = 1.5 }) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract number and suffix (e.g., "3+" -> 3, "+")
  const numericValue = parseInt(value, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(numericValue);
      return;
    }
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalSteps = end;
    const intervalTime = Math.max(Math.floor((duration * 1000) / totalSteps), 30);
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl font-bold gradient-text">
      {shouldReduceMotion ? value : `${count}${suffix}`}
    </span>
  );
}

export default function Stats() {
  const stats = portfolioData.stats;

  // Animation constants
  const easeOut = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-white dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/80 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          variants={stagger}
          className="grid gap-10 grid-cols-2 lg:grid-cols-4 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center justify-center p-4 border-r last:border-0 border-white/10 md:border-r-0 lg:border-r"
            >
              <CountUp value={stat.value} />
              <span className="mt-3 font-mono text-xs md:text-sm uppercase tracking-[0.15em] text-muted-foreground/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
