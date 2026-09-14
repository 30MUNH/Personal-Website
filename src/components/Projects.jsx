import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, GitlabIcon } from "./ui/Icons";
import { portfolioData } from "../data/portfolio";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export default function Projects() {
  const projects = portfolioData.projects;

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

  // Helper to determine link icon
  const getLinkIcon = (url) => {
    if (url.includes("gitlab.com")) {
      return <GitlabIcon className="h-4 w-4" />;
    }
    return <GithubIcon className="h-4 w-4" />;
  };

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#FAFAFA] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute right-0 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-accent/3 blur-[120px]" />

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
            <Badge>// PROJECTS</Badge>
          </motion.div>

          {/* Section Heading */}
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-[3.25rem] leading-[1.15] text-foreground mb-16 max-w-3xl"
          >
            Sản phẩm & <span className="gradient-text">Dự án cá nhân</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid w-full gap-8 grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => {
              const isFeatured = project.featured;
              const isRoboPlanner = project.id === "proj-roboplanner";

              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className={isFeatured ? "lg:col-span-2" : "lg:col-span-1"}
                >
                  <Card
                    featured={isFeatured}
                    className="h-full flex flex-col justify-between text-left"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        {/* Header Details */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                              {isFeatured && <Sparkles className="h-3.5 w-3.5 text-accent" />}
                              {project.role}
                            </span>
                            {isRoboPlanner && (
                              <span className="font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-2.5 py-0.5 rounded-full">
                                AI20K • VinUni & VSF
                              </span>
                            )}
                            {project.id === "proj-railgo" && (
                              <span className="font-mono text-[11px] font-semibold text-accent bg-accent/5 border border-accent/15 px-2.5 py-0.5 rounded-full">
                                FPT Software
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground font-sans font-medium italic">
                            {project.tagline}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-foreground mb-3">
                          {project.name}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm md:text-base leading-relaxed text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        {/* Technical Evidence Highlights (Exclusive for RoboPlanner) */}
                        {isRoboPlanner && (
                          <div className="grid grid-cols-3 gap-2 my-5 p-3.5 rounded-xl bg-accent/[0.03] border border-accent/15">
                            <div className="text-center">
                              <div className="font-mono text-base md:text-lg font-bold text-accent">0%</div>
                              <div className="text-[11px] text-muted-foreground font-medium">Hallucinated Done</div>
                            </div>
                            <div className="text-center border-x border-border/80">
                              <div className="font-mono text-base md:text-lg font-bold text-accent">100%</div>
                              <div className="text-[11px] text-muted-foreground font-medium">Infeasible Correct</div>
                            </div>
                            <div className="text-center">
                              <div className="font-mono text-base md:text-lg font-bold text-accent">346</div>
                              <div className="text-[11px] text-muted-foreground font-medium">Tests Passing</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer Info */}
                      <div className="mt-4 pt-4 border-t border-border/50">
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techs.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Actions */}
                        <div className="flex flex-wrap items-center gap-3">
                          {project.demo && (
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => window.open(project.demo, "_blank")}
                              className="gap-2 shadow-sm"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span>Trải nghiệm Live Demo</span>
                            </Button>
                          )}
                          <Button
                            variant={project.demo ? "outline" : (isFeatured ? "primary" : "outline")}
                            size="sm"
                            onClick={() => window.open(project.link, "_blank")}
                            className="gap-2"
                          >
                            {getLinkIcon(project.link)}
                            <span>Source Code</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
