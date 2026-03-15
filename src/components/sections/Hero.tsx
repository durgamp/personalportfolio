"use client";

import { ArrowDown, Mail, FileText, Linkedin, Globe } from "lucide-react";

const contactCards = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:durga.nitrkl@gmail.com",
  },
  {
    label: "Resume",
    icon: FileText,
    href: "https://drive.google.com/file/d/16DLYy96zzTKMEC6YM3W-kh4O3_NJ4Wiz/view?usp=drive_link",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/durga-madhaba-padhy",
    external: true,
  },
  {
    label: "Portfolio",
    icon: Globe,
    href: "#projects",
  },
];

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #3F51B5 0%, #009688 100%)" }}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in text-left">
            <h1 className="font-poppins text-5xl sm:text-6xl font-semibold text-white mb-6 leading-tight">
              Durga Madhaba Padhy
            </h1>
            <p className="text-2xl text-white/90 mb-4 font-light">
              Turning complexity into clarity through thoughtful product decisions.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              Product Manager | 5+ Years Product experience across Fintech, Automation, Life Science, AI Products. Total 13+ years experience in digital transformation.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              Currently leading Digital Product Development and Industry 4.0 initiatives at Aragen Life Sciences — Simplifying User Experience, Accelerating Innovation and Driving Strategic Business Outcomes.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              With Product experience spanning Life Sciences, Fintech, and Manufacturing 4.0, my learnings are rooted in building hypotheses, asking the right questions and creating mind maps that help move from confusion to conviction.
            </p>
            <button
              onClick={scrollToWork}
              className="group px-8 py-4 bg-white rounded-full font-poppins font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              style={{ color: "#3F51B5" }}
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right: Photo + Contact cards */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile photo */}
            <div className="w-72 h-72 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Durga Madhaba Padhy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-3 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors">
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] text-white font-medium">{card.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
