import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape";
}

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = "landscape",
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl",
        aspectClasses[aspectRatio],
        className
      )}
      style={{
        background: "linear-gradient(135deg, rgba(63,81,181,0.08) 0%, rgba(0,150,136,0.08) 100%)",
        border: "2px dashed rgba(63,81,181,0.2)",
      }}
    >
      <ImageIcon className="w-10 h-10 mb-3 opacity-30" style={{ color: "#3F51B5" }} />
      {label && (
        <p className="text-sm font-medium opacity-40" style={{ color: "#3F51B5" }}>
          {label}
        </p>
      )}
    </div>
  );
}
