import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, ArrowRight, Code2, Bot, Cpu } from "lucide-react";
import { GithubIcon, GitlabIcon, FacebookIcon, InstagramIcon } from "./ui/Icons";
import { portfolioData } from "../data/portfolio";
import { Button } from "./ui/Button";

export default function Hero() {
  const { fullName, titles, tagline, cvLink, socials } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();

  // Animation constants
  const easeOut = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  // Continuous animation variants (disabled if reduced motion is preferred)
  const rotatingRingVariant = shouldReduceMotion
    ? {}
    : {
        rotate: 360,
        transition: { duration: 60, repeat: Infinity, ease: "linear" },
      };

  const floatCard1 = shouldReduceMotion
    ? {}
    : {
        y: [-10, 10, -10],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      };

  const floatCard2 = shouldReduceMotion
    ? {}
    : {
        y: [8, -8, 8],
        transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      };

  const floatCard3 = shouldReduceMotion
    ? {}
    : {
        y: [-6, 6, -6],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      };

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-24 md:py-32 dot-pattern-light"
    >
      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute left-10 bottom-10 -z-10 h-[250px] w-[250px] rounded-full bg-accent-secondary/5 blur-[100px]" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Text Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Sẵn sàng làm việc
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.1] mb-6"
            >
              Hi, Tôi là <br />
              <span className="gradient-text">{fullName}</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground mb-4"
            >
              {titles.join(" / ")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl font-sans text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed mb-8"
            >
              {tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo("#projects")}
                className="group"
              >
                Xem dự án
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("#contact")}
              >
                Liên hệ
              </Button>
              <a href={cvLink} download="CV_NguyenDinhTienManh.pdf">
                <Button
                  variant="ghost"
                  size="lg"
                  className="gap-2 text-muted-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Tải CV
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Follow me:
              </span>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              >
                <GitlabIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Graphic composition (hidden on mobile, visible on desktop) */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            {/* 3x3 Grid of Decorative dots */}
            <div className="absolute top-10 left-10 grid grid-cols-3 gap-3 opacity-30 select-none">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-accent/40" />
              ))}
            </div>

            {/* Accent Solid Block */}
            <div className="absolute bottom-10 right-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-accent to-accent-secondary opacity-10 blur-md shadow-accent" />

            {/* Rotating Ring Container */}
            <div className="relative flex h-[360px] w-[360px] items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
                animate={rotatingRingVariant}
              />
              <div className="absolute h-[320px] w-[320px] rounded-full border border-border/40 bg-card/40 backdrop-blur-3xl shadow-sm" />
              <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-accent/5 to-accent-secondary/10 flex items-center justify-center border border-accent/10">
                <Code2 className="h-10 w-10 text-accent/80" />
              </div>

              {/* Floating Card 1 (ReactJS / Frontend) */}
              <motion.div
                className="absolute -top-4 -left-6"
                animate={floatCard1}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg hover:border-accent/30 transition-colors duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-foreground">ReactJS</h4>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Frontend</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 (NestJS / Backend) */}
              <motion.div
                className="absolute top-28 -right-8"
                animate={floatCard2}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg hover:border-accent/30 transition-colors duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-secondary/10 text-accent-secondary">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-foreground">NestJS</h4>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Backend</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 (AI Agents / LangGraph) */}
              <motion.div
                className="absolute -bottom-6 left-12"
                animate={floatCard3}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg hover:border-accent/30 transition-colors duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-foreground">LangGraph</h4>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">AI Agents</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
