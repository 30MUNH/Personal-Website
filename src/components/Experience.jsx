import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

export default function Experience() {
  const experiences = portfolioData.experience;

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
    <section id="experience" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute left-0 bottom-10 -z-10 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[120px]" />

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
            <Badge>// EXPERIENCE</Badge>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-16 text-center"
          >
            Kinh nghiệm <span className="gradient-text">Làm việc</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative w-full border-l-2 border-border pl-6 md:pl-10 ml-3 md:ml-6 flex flex-col gap-12">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-accent/25 bg-background shadow-md">
                  <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_8px_#0052FF]" />
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr_2.5fr]">
                  {/* Left Column: Company & Period */}
                  <div className="text-left">
                    <h3 className="font-sans text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mt-1">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-3">
                      <Calendar className="h-4 w-4 text-muted-foreground/60" />
                      <span className="font-sans text-xs md:text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Project details card */}
                  <Card className="bg-card text-left p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/5 border border-accent/10">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-sans text-md font-semibold text-foreground">
                          Dự án đảm nhiệm
                        </h4>
                        <p className="font-sans text-sm text-accent-secondary font-medium">
                          {exp.project.name}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-4">
                      {exp.project.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-1" />
                          <span className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
