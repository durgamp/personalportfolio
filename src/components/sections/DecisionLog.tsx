import { HelpCircle, TrendingUp, Lightbulb } from "lucide-react";
import { decisionLog } from "@/data/decisionLog";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function DecisionLog() {
  return (
    <section id="decision-log" className="py-20" style={{ backgroundColor: "#1E8B9C" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Decision Log"
          subtitle="Key product decisions and what they taught me"
          light
        />

        <div className="grid md:grid-cols-3 gap-8">
          {decisionLog.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium font-poppins text-white"
                  style={{ backgroundColor: "#3F51B5" }}
                >
                  Decision #{index + 1}
                </span>
                <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xl">
                  {item.emoji}
                </div>
              </div>

              {/* Decision title */}
              <h3 className="font-poppins font-semibold text-gray-900 dark:text-white mb-6 leading-snug">
                {item.decision}
              </h3>

              <div className="space-y-4 flex-grow">
                {/* Why */}
                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,150,136,0.1)" }}
                  >
                    <HelpCircle className="w-4 h-4" style={{ color: "#009688" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: "#009688" }}>WHY</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.why}
                    </p>
                  </div>
                </div>

                {/* Result */}
                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(63,81,181,0.1)" }}
                  >
                    <TrendingUp className="w-4 h-4" style={{ color: "#3F51B5" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: "#3F51B5" }}>RESULT</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.result}
                    </p>
                  </div>
                </div>

                {/* Learning */}
                <div className="flex gap-3">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(232,121,163,0.1)" }}
                  >
                    <Lightbulb className="w-4 h-4" style={{ color: "#E879A3" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-1" style={{ color: "#E879A3" }}>LEARNING</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed italic">
                      &ldquo;{item.learning}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
