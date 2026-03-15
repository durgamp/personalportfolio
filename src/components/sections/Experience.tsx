"use client";

import { useState, useEffect, useRef } from "react";
import { Building2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Tag } from "@/components/shared/Tag";

const tools = [
  { name: "Notion", emoji: "📝" },
  { name: "Figma", emoji: "🎨" },
  { name: "ChatGPT", emoji: "🤖" },
  { name: "Lovable", emoji: "❤️" },
  { name: "Bolt", emoji: "⚡" },
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
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                    {tool.emoji}
                  </div>
                  <span className="text-white text-sm font-poppins">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
