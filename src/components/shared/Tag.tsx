import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "teal" | "indigo" | "pink";
  className?: string;
}

export function Tag({ label, variant = "teal", className }: TagProps) {
  const colors = {
    teal: "bg-teal-50 text-teal-500 border border-teal-100",
    indigo: "bg-indigo-50 text-indigo-DEFAULT border border-indigo-100",
    pink: "bg-pink-50 text-pink-500 border border-pink-100",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        colors[variant],
        className
      )}
      style={
        variant === "teal"
          ? { backgroundColor: "rgba(0,150,136,0.1)", color: "#009688" }
          : variant === "indigo"
          ? { backgroundColor: "rgba(63,81,181,0.1)", color: "#3F51B5" }
          : undefined
      }
    >
      {label}
    </span>
  );
}
