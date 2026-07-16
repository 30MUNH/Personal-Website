import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

const menuItems = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Học vấn", href: "#education" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 120;
      for (const item of menuItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="font-display text-2xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
          >
            Mạnh<span className="text-accent">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`font-sans text-sm font-medium transition-colors duration-200 relative py-1 ${
                      activeSection === item.href
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="text-xs group"
            >
              Tuyển dụng ngay
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground hover:bg-muted md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-border bg-background p-6 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`block font-sans text-base font-semibold py-2 transition-colors ${
                        activeSection === item.href
                          ? "text-accent"
                          : "text-foreground hover:text-accent"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="mt-2 w-full"
              >
                Tuyển dụng ngay
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
