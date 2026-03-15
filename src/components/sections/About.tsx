import { Lightbulb, Users, Scale } from "lucide-react";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const principles = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "Transform ambiguity into structure",
    color: "#009688",
  },
  {
    icon: Users,
    title: "Adoption",
    description: "Intuitive design drives usage",
    color: "#3F51B5",
  },
  {
    icon: Scale,
    title: "Decision Frameworks",
    description: "Structured systems compound value",
    color: "#E879A3",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Philosophy */}
          <div className="space-y-5">
            <h2 className="font-poppins text-3xl font-semibold" style={{ color: "#3F51B5" }}>
              My Product Philosophy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I turn ambiguity into structure. My approach is rooted in clarity, measurable rhythm, and system design.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I thrive where context is messy — life-sciences labs, manufacturing data, or fintech workflows.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe clear decisions compound into better systems, adoption follows intuitive design, and teams grow through rhythm.
            </p>

            {/* Principles */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {principles.map((p) => (
                <div key={p.title} className="flex flex-col items-start space-y-2 flex-1">
                  <div
                    className="p-2.5 rounded-2xl"
                    style={{ backgroundColor: `${p.color}18` }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h4 className="font-poppins font-semibold text-sm text-gray-900 dark:text-white">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6">
            <ImagePlaceholder
              label="Product Philosophy Visual"
              aspectRatio="landscape"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
