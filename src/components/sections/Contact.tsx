import { Mail, Phone, Linkedin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "durga.nitrkl@gmail.com",
    href: "mailto:durga.nitrkl@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7008403129",
    href: "tel:+917008403129",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "durga-madhaba-padhy",
    href: "https://linkedin.com/in/durga-madhaba-padhy",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #009688 0%, #3F51B5 100%)" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-poppins text-4xl font-semibold text-white mb-4">
            Let&apos;s Build Clarity Together
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Whether you&apos;re looking for a product leader or want to discuss digital transformation, I&apos;d love to connect.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/70 text-xs uppercase tracking-wider mb-1">{method.label}</p>
              <p className="text-white font-medium text-sm break-all">{method.value}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <a
            href="mailto:durga.nitrkl@gmail.com"
            className="inline-block px-10 py-4 bg-white rounded-full font-poppins font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ color: "#3F51B5" }}
          >
            Hire Me / Let&apos;s Collaborate
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-white/20">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Durga Madhaba Padhy | Built for Clarity
          </p>
        </div>
      </div>
    </section>
  );
}
