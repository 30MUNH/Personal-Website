import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Stats Section (Dark Inverted) */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
