"use client";

import { useState } from "react";
import { Camera, Lightbulb, Eye } from "lucide-react";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const photoCategories = [
  { title: "Roadtrip", category: "Nature", count: 5 },
  { title: "Portraits", category: "People", count: 1 },
  { title: "Sea View", category: "Urban", count: 5 },
  { title: "Landscape", category: "Nature", count: 11 },
  { title: "Architecture", category: "Structure", count: 1 },
  { title: "Abstract", category: "Creative", count: 2 },
];

export function Photography() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section
      id="photography"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8" style={{ color: "#3F51B5" }} />
            <h2 className="font-poppins text-4xl font-semibold" style={{ color: "#3F51B5" }}>
              Through the Lens
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Personal creativity in photography
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Photographer photo */}
            <div className="relative min-h-[400px] lg:min-h-[600px]">
              <ImagePlaceholder
                label="Durga with Camera"
                aspectRatio="portrait"
                className="w-full h-full rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Right: Philosophy + gallery */}
            <div className="p-8 md:p-10 flex flex-col">
              {/* Philosophy */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="flex-shrink-0 p-2.5 rounded-xl"
                    style={{ backgroundColor: "rgba(63,81,181,0.1)" }}
                  >
                    <Lightbulb className="w-5 h-5" style={{ color: "#3F51B5" }} />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 dark:text-gray-100">
                    How Photography Fuels My Professional Ambitions
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Off the desk, my lens sharpens my observation and storytelling, driving my product decisions with empathy and balance.
                  </p>
                  <p>
                    The discipline of composition — balance, hierarchy, and negative space — directly translates to designing intuitive user experiences.
                  </p>
                  <p>
                    Photography reminds me that{" "}
                    <span className="font-semibold" style={{ color: "#009688" }}>
                      constraints breed creativity
                    </span>
                    . Limited light, fixed focal length, fleeting moments — these limitations force innovative solutions. In product management, constraints like tight budgets or technical debt aren&apos;t obstacles; they&apos;re opportunities to think differently.
                  </p>
                </div>
              </div>

              {/* Gallery grid */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-4 h-4" style={{ color: "#009688" }} />
                  <h4 className="font-poppins font-semibold text-gray-900 dark:text-gray-100">
                    Selected Works
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {photoCategories.map((photo, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                      onClick={() =>
                        setSelectedCategory(selectedCategory === index ? null : index)
                      }
                    >
                      <ImagePlaceholder
                        label={`${photo.title} (${photo.count})`}
                        aspectRatio="landscape"
                        className="w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-[10px] uppercase tracking-wider opacity-80">
                            {photo.category}
                          </p>
                          <p className="text-white font-poppins text-sm font-medium">
                            {photo.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Photography isn&apos;t just a hobby — it&apos;s a lens through which I view problem-solving, creativity, and the pursuit of elegant simplicity.
          </p>
        </div>
      </div>
    </section>
  );
}
