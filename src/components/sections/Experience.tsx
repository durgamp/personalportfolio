"use client";

import { useState, useEffect, useRef } from "react";
import { Building2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Tag } from "@/components/shared/Tag";

const tools = [
  {
    name: "Notion",
    bg: "#ffffff",
    icon: (
      <svg viewBox="0 0 100 100" className="w-10 h-10">
        <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94C.967 76.827 0 74.497 0 71.773V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/>
        <path d="M61.35.227L6.017 4.313C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.894.036 68.147-.357 61.35.227zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327V38.724l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    bg: "#ffffff",
    icon: (
      <svg viewBox="0 0 200 300" className="w-8 h-12">
        <path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/>
        <path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/>
        <path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/>
        <path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" fill="#ff7262"/>
        <path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    bg: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="#10a37f"/>
      </svg>
    ),
  },
  {
    name: "Lovable",
    bg: "linear-gradient(135deg, #a855f7, #ec4899)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    name: "Bolt",
    bg: "linear-gradient(135deg, #f59e0b, #f97316)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
      </svg>
    ),
  },
  {
    name: "Antigravity",
    bg: "linear-gradient(135deg, #1e293b, #334155)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v8M8 10l4-4 4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 16h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "VS Code",
    bg: "linear-gradient(135deg, #0078d4, #005ba1)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="white">
        <path d="M17.583.063L9.963 7l-4.6-3.5L3 4.5v15l2.363 1 4.6-3.5 7.62 6.937L21 21.896V2.104L17.583.063zM19 19.396l-5.604-4.771L19 9.938v9.458zM19 7.083l-5.604 4.604L8.271 7.25 19 4.583v2.5z"/>
      </svg>
    ),
  },
  {
    name: "Claude Code",
    bg: "linear-gradient(135deg, #cc785c, #d4956a)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="white" fillOpacity="0.15"/>
        <path d="M8.5 15.5L12 7l3.5 8.5M9.5 13h5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18c1.5-1 3.5-1.5 6-1.5s4.5.5 6 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
];

export function Experience() {
  const [showProductsIndex, setShowProductsIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: "#1E8B9C" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="Digital Transformation & Product Management journey across diverse industries"
          light
        />

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-[8px] left-0 right-0 h-[2px]" style={{ backgroundColor: "#3F51B5" }} />
          <div className="relative flex justify-between items-start pt-2">
            {experiences.map((exp, index) => {
              const reverseIndex = experiences.length - 1 - index;
              const delay = reverseIndex * 150;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center w-1/5 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div
                    className={`w-4 h-4 rounded-full mb-6 relative z-10 ${
                      exp.current ? "ring-4" : ""
                    }`}
                    style={{
                      backgroundColor: exp.current ? "#3F51B5" : "#009688",
                      boxShadow: exp.current ? "0 0 0 4px rgba(63,81,181,0.2)" : "none",
                    }}
                  />
                  <div
                    className={`bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full flex flex-col relative group cursor-pointer ${
                      exp.current ? "ring-2" : ""
                    }`}
                    style={exp.current ? { outline: "2px solid #3F51B5" } : {}}
                    onMouseEnter={() => setShowProductsIndex(index)}
                    onMouseLeave={() => setShowProductsIndex(null)}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-2.5 rounded-xl" style={{ backgroundColor: "rgba(63,81,181,0.1)" }}>
                        <Building2 className="w-5 h-5" style={{ color: "#3F51B5" }} />
                      </div>
                    </div>
                    <div className="flex justify-center mb-2">
                      <Tag label={exp.badge} variant="teal" />
                    </div>
                    <h3 className="font-poppins text-sm font-semibold text-center text-gray-900 dark:text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-1">
                      {exp.role}
                    </p>
                    <p className="text-xs text-center" style={{ color: "#009688" }}>
                      {exp.year}
                    </p>

                    {/* Products overlay on hover */}
                    {showProductsIndex === index && (
                      <div
                        className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-center items-center z-20 animate-fade-in"
                        style={{ backgroundColor: "#3F51B5" }}
                      >
                        <h4 className="font-poppins text-xs font-semibold text-white mb-2">
                          Products
                        </h4>
                        <p className="text-xs text-white text-center leading-relaxed">
                          {exp.products}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative mb-16">
          <div
            className="absolute left-8 top-0 bottom-0 w-[2px]"
            style={{ backgroundColor: "#3F51B5" }}
          />
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const reverseIndex = experiences.length - 1 - index;
              const delay = reverseIndex * 150;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div
                    className="absolute left-8 w-4 h-4 rounded-full -translate-x-1/2 z-10"
                    style={{ backgroundColor: exp.current ? "#3F51B5" : "#009688" }}
                  />
                  <div className="ml-16 flex-1">
                    <div
                      className={`bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-lg ${
                        exp.current ? "outline outline-2" : ""
                      }`}
                      style={exp.current ? { outlineColor: "#3F51B5" } : {}}
                      onClick={() =>
                        setShowProductsIndex(showProductsIndex === index ? null : index)
                      }
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(63,81,181,0.1)" }}>
                          <Building2 className="w-4 h-4" style={{ color: "#3F51B5" }} />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                          <p className="text-xs" style={{ color: "#009688" }}>{exp.year}</p>
                        </div>
                      </div>
                      <Tag label={exp.badge} variant="teal" className="mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.role}</p>
                      {showProductsIndex === index && (
                        <div
                          className="mt-3 p-3 rounded-xl animate-fade-in"
                          style={{ backgroundColor: "#3F51B5" }}
                        >
                          <p className="text-xs text-white leading-relaxed">{exp.products}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools section */}
        <div>
          <h3 className="font-poppins text-xl text-center text-white mb-6">
            Hands-on Experience with Design & Documentation Tools
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl px-8 py-10">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
                    style={{ background: tool.bg }}
                  >
                    {tool.icon}
                  </div>
                  <span className="text-white text-sm font-poppins font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
