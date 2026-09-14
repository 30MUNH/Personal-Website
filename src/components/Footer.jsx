import React from "react";
import { GithubIcon, GitlabIcon, FacebookIcon, InstagramIcon } from "./ui/Icons";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { fullName, socials } = portfolioData.personalInfo;

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold text-foreground">
              Ambrose<span className="text-accent">.dev</span>
            </span>
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              Built with React, Vite & Tailwind CSS. Designed to wow.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={socials.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              aria-label="GitLab"
            >
              <GitlabIcon className="h-5 w-5" />
            </a>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-muted-foreground md:order-first">
            &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
