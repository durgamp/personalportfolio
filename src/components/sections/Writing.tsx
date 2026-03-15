import { PenLine } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Writing() {
  return (
    <section id="writing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Writing & Reflections"
          subtitle="Thoughts on product, clarity, and building with intention"
        />

        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
            style={{ backgroundColor: "rgba(63,81,181,0.1)" }}
          >
            <PenLine className="w-8 h-8" style={{ color: "#3F51B5" }} />
          </div>
          <p className="text-2xl text-gray-500 dark:text-gray-400 font-poppins">
            Will start writing soon 🙂
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Articles and essays on product thinking, decision-making, and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
