import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

export default function Skills() {
  const categories = portfolioData.skills;
  const shouldReduceMotion = useReducedMotion();

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
    <section id="skills" className="py-28 md:py-36 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col items-center text-center"
        >
          {/* Section Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge>// SKILLS</Badge>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-16 max-w-3xl"
          >
            Kỹ năng chuyên môn & <span className="gradient-text">Công nghệ</span>
          </motion.h2>

          {/* Skills Grid */}
          <motion.div
            variants={stagger}
            className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((cat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col justify-between bg-card">
                  <div>
                    {/* Category Title */}
                    <h3 className="font-sans text-xl font-bold text-foreground text-left border-b border-border pb-4 mb-6">
                      {cat.category}
                    </h3>
                    
                    {/* Skills list */}
                    <div className="flex flex-col gap-6">
                      {cat.items.map((skill, sIdx) => (
                        <div key={sIdx} className="text-left">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="font-sans text-sm font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs text-accent font-semibold">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar background */}
                          <div className="h-2 w-full rounded-full bg-muted overflow-hidden mb-1">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                              initial={{ width: 0 }}
                              whileInView={
                                shouldReduceMotion
                                  ? { width: `${skill.level}%` }
                                  : {
                                      width: `${skill.level}%`,
                                      transition: { duration: 1.2, ease: easeOut },
                                    }
                              }
                              viewport={{ once: true }}
                            />
                          </div>

                          {/* Skill details explanation */}
                          <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">
                            {skill.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
