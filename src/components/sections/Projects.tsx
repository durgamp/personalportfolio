"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Target, Lightbulb, TrendingUp, ExternalLink, CheckCircle, Code } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Project } from "@/types";

type Category = "final" | "prototype" | null;

function ProjectCard({ project, isExpanded, onToggle }: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      <button
        onClick={onToggle}
        className="w-full p-6 flex justify-between items-start text-left gap-4"
      >
        <h3 className="font-poppins text-base font-semibold text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3F51B5" }} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#3F51B5" }} />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-5 animate-fade-in">
          {/* Context */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2.5 rounded-xl self-start" style={{ backgroundColor: "rgba(63,81,181,0.1)" }}>
              <Target className="w-4 h-4" style={{ color: "#3F51B5" }} />
            </div>
            <div>
              <h4 className="font-poppins text-xs font-semibold mb-1" style={{ color: "#3F51B5" }}>
                Context
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.context}
              </p>
            </div>
          </div>

          {/* Decision */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2.5 rounded-xl self-start" style={{ backgroundColor: "rgba(0,150,136,0.1)" }}>
              <Lightbulb className="w-4 h-4" style={{ color: "#009688" }} />
            </div>
            <div>
              <h4 className="font-poppins text-xs font-semibold mb-1" style={{ color: "#009688" }}>
                {project.category === "prototype" ? "Solution Approach" : "Decision"}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.decision}
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2.5 rounded-xl self-start" style={{ backgroundColor: "rgba(232,121,163,0.1)" }}>
              <TrendingUp className="w-4 h-4" style={{ color: "#E879A3" }} />
            </div>
            <div>
              <h4 className="font-poppins text-xs font-semibold mb-1" style={{ color: "#E879A3" }}>
                {project.category === "prototype" ? "Feature Set" : "Impact"}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Reflection */}
          <div
            className="p-4 rounded-xl border-l-4"
            style={{ backgroundColor: "rgba(63,81,181,0.04)", borderLeftColor: "#3F51B5" }}
          >
            <p className="text-sm italic text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold not-italic">Reflection: </span>
              {project.reflection}
            </p>
          </div>

          {/* Link */}
          {project.prototypeLink && (
            <a
              href={project.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
              style={{ color: "#3F51B5" }}
            >
              <ExternalLink className="w-4 h-4" />
              View {project.category === "final" ? "Implementation" : "Prototype"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Case Studies & Prototypes"
          subtitle="Real problems, thoughtful decisions, measurable outcomes"
        />

        {/* Category selection */}
        {!selectedCategory ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              onClick={() => setSelectedCategory("final")}
              className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center border-2 border-transparent hover:border-indigo-500"
              style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
            >
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "rgba(63,81,181,0.1)" }}
              >
                <CheckCircle className="w-12 h-12" style={{ color: "#3F51B5" }} />
              </div>
              <h3 className="font-poppins text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Final Implementations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Production-ready solutions delivered with measurable business impact
              </p>
              <span
                className="px-6 py-2 rounded-full text-sm text-white font-medium"
                style={{ backgroundColor: "#3F51B5" }}
              >
                View Projects →
              </span>
            </div>

            <div
              onClick={() => setSelectedCategory("prototype")}
              className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center text-center border-2 border-transparent"
            >
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "rgba(0,150,136,0.1)" }}
              >
                <Code className="w-12 h-12" style={{ color: "#009688" }} />
              </div>
              <h3 className="font-poppins text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Working Prototypes
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Validated concepts and proof-of-concept demonstrations
              </p>
              <span
                className="px-6 py-2 rounded-full text-sm text-white font-medium"
                style={{ backgroundColor: "#009688" }}
              >
                View Prototypes →
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setExpandedProject(null);
                }}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                ← Back to Categories
              </button>
            </div>
            <div className="mb-10 text-center">
              <h3 className="font-poppins text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedCategory === "final" ? "Final Implementations" : "Working Prototypes"}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {selectedCategory === "final"
                  ? "Production-ready solutions with proven business impact"
                  : "Validated concepts demonstrating feasibility and value"}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  isExpanded={expandedProject === project.title}
                  onToggle={() => toggleProject(project.title)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
