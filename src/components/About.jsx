import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ShieldAlert, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";

const icons = [Lightbulb, ShieldAlert, Heart];

export default function About() {
  const { objective, strengths } = portfolioData.about;

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
    <section id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[130px]" />

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
            <Badge>// ABOUT ME</Badge>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-8 max-w-3xl"
          >
            Mục tiêu nghề nghiệp & <span className="gradient-text">Giá trị cốt lõi</span>
          </motion.h2>

          {/* Objective Text */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mb-16 text-justify md:text-center"
          >
            {objective}
          </motion.p>

          {/* Strength Cards */}
          <motion.div
            variants={stagger}
            className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {strengths.map((strength, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div key={strength.id} variants={fadeInUp}>
                  <Card
                    asymmetric={index === 1} // Make the middle card organic asymmetric
                    className="h-full flex flex-col items-start text-left bg-card transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/5 mb-6 border border-accent/10">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-sans text-lg md:text-xl font-bold tracking-tight text-foreground mb-3">
                      {strength.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                      {strength.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
