"use client";

import { useState } from "react";
import { Camera, Lightbulb, Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCategory {
  title: string;
  category: string;
  images: string[];
}

const photoCategories: PhotoCategory[] = [
  {
    title: "Roadtrip",
    category: "Nature",
    images: [
      "/images/photography/roadtrip-1.png",
      "/images/photography/roadtrip-2.png",
      "/images/photography/roadtrip-3.png",
      "/images/photography/roadtrip-4.png",
      "/images/photography/roadtrip-5.png",
    ],
  },
  {
    title: "Portraits",
    category: "People",
    images: ["/images/photography/portrait-1.png"],
  },
  {
    title: "Sea View",
    category: "Urban",
    images: [
      "/images/photography/seaview-1.png",
      "/images/photography/seaview-2.png",
      "/images/photography/seaview-3.png",
      "/images/photography/seaview-4.png",
      "/images/photography/seaview-5.png",
    ],
  },
  {
    title: "Landscape",
    category: "Nature",
    images: [
      "/images/photography/landscape-1.png",
      "/images/photography/landscape-2.png",
      "/images/photography/landscape-3.png",
      "/images/photography/landscape-4.png",
      "/images/photography/landscape-5.png",
      "/images/photography/landscape-6.png",
    ],
  },
  {
    title: "Abstract",
    category: "Creative",
    images: [
      "/images/photography/abstract-1.png",
      "/images/photography/abstract-2.png",
    ],
  },
  {
    title: "Architecture",
    category: "Structure",
    images: [
      "https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/494757651_3992625114341634_8565954733809274398_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=ehACJDmXQ3EQ7kNvwHuIRbL&_nc_oc=AdkMubjZZoYp0KIaBi-ev2sM1-guWNA3D7R4NSvdbgOiiqzGZ1pvBw9bHWc5CJAbeSlgC_5CmG9VIaWm5j4TS0Vt&_nc_zt=23&_nc_ht=scontent.fhyd1-5.fna&_nc_gid=74tNbbjnoB0rFOKcXKKyrw&oh=00_AfcSiCd_ukw579EUG8YKvAwFQzgA8wO54_YoHQej1QYQCg&oe=68F437CB",
    ],
  },
];

function PhotoCard({ photo }: { photo: PhotoCategory }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = photo.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? photo.images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i === photo.images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-[4/3] bg-gray-100">
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.images[currentIndex]}
        alt={`${photo.title} ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white/70 text-[10px] uppercase tracking-wider">{photo.category}</p>
          <p className="text-white font-poppins text-sm font-medium">
            {photo.title}{hasMultiple ? ` (${currentIndex + 1}/${photo.images.length})` : ""}
          </p>
        </div>
      </div>

      {/* Carousel nav arrows — only on hover, only if multiple */}
      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 shadow"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-10 shadow"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </button>

          {/* Dot indicators — always visible when multiple */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
            {photo.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-3 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Photography() {
  return (
    <section
      id="photography"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Camera className="w-7 h-7" style={{ color: "#3F51B5" }} />
            <h2 className="font-poppins text-4xl font-semibold" style={{ color: "#3F51B5" }}>
              Through the Lens
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400">Personal creativity in photography</p>
        </div>

        {/* Main card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: Photographer photo */}
            <div className="relative min-h-[500px] lg:min-h-[680px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/photography/photographer.png"
                alt="Durga Madhaba Padhy with camera"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Right: Philosophy + gallery */}
            <div className="p-8 md:p-10 flex flex-col">
              {/* Philosophy */}
              <div className="mb-7">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 p-2 rounded-xl" style={{ backgroundColor: "rgba(63,81,181,0.1)" }}>
                    <Lightbulb className="w-5 h-5" style={{ color: "#3F51B5" }} />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                    How Photography Fuels My Professional Ambitions
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Off the desk, my lens sharpens my observation and storytelling,{" "}
                    <span style={{ color: "#3F51B5" }}>driving my product decisions</span>{" "}
                    with empathy and balance.
                  </p>
                  <p>
                    The discipline of composition —{" "}
                    <span style={{ color: "#3F51B5" }}>balance, hierarchy, and negative space</span>{" "}
                    — directly translates to designing intuitive user experiences.
                  </p>
                  <p>
                    Photography reminds me that{" "}
                    <span className="font-semibold" style={{ color: "#009688" }}>
                      constraints breed creativity
                    </span>
                    . Limited light, fixed focal length, fleeting moments — these limitations force{" "}
                    <span style={{ color: "#009688" }}>innovative solutions</span>. In product
                    management, constraints like tight budgets or technical debt aren&apos;t obstacles;
                    they&apos;re opportunities to think differently.
                  </p>
                </div>
              </div>

              {/* Selected Works gallery */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-4 h-4" style={{ color: "#009688" }} />
                  <h4 className="font-poppins font-semibold text-gray-900 dark:text-gray-100">
                    Selected Works
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {photoCategories.map((photo) => (
                    <PhotoCard key={photo.title} photo={photo} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-6 text-sm text-gray-400 dark:text-gray-500 italic">
          Photography isn&apos;t just a hobby — it&apos;s a lens through which I view problem-solving,
          creativity, and the pursuit of elegant simplicity.
        </p>
      </div>
    </section>
  );
}
