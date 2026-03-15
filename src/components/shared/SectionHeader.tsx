interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`font-poppins text-4xl font-semibold mb-4 ${
          light ? "text-white" : "text-indigo-DEFAULT"
        }`}
        style={{ color: light ? "#ffffff" : "#3F51B5" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
