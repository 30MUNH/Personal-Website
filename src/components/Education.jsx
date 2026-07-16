import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Landmark } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

export default function Education() {
  const { institution, major, period, details } = portfolioData.education;

  // Animation constants
  const easeOut = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  return (
    <section id="education" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-10 top-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-accent/4 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* Section Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge>// EDUCATION</Badge>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-16 text-center"
          >
            Học vấn & <span className="gradient-text">Bằng cấp</span>
          </motion.h2>

          {/* Education Card */}
          <motion.div variants={fadeInUp} className="w-full">
            <Card className="bg-card flex flex-col md:flex-row gap-6 items-start md:items-center p-8 border border-border hover:border-accent/20 transition-all duration-300">
              {/* Institution Logo/Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/5 border border-accent/10">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>

              {/* Institution Details */}
              <div className="flex-1 text-left">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-muted-foreground" />
                    {institution}
                  </h3>
                  <div className="flex items-center gap-1.5 font-sans text-xs text-muted-foreground font-semibold">
                    <Calendar className="h-3.5 w-3.5" />
                    {period}
                  </div>
                </div>

                <p className="font-mono text-sm uppercase tracking-wider text-accent font-bold mb-4">
                  Chuyên ngành: {major}
                </p>

                <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground border-l-2 border-accent/20 pl-4">
                  {details}
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
