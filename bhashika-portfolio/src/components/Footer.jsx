import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#080810] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollTop} className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-lg flex items-center justify-center">
              <Code2 size={18} className="text-black" />
            </div>
            <span className="font-bold text-lg">
              <span className="text-[#00ff88]">Bha</span>
              <span className="text-white">shika</span>
            </span>
          </button>

          {/* Copyright */}
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Built with <Heart size={13} className="text-red-500 fill-red-500" /> using React + Tailwind
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/ScorpioCS9958' },
              { icon: Linkedin, href: 'https://linkedin.com/in/bhashikahirusha' },
              { icon: Mail, href: 'mailto:bhashikahiru9958@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-500 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs">
            © 2026 Bhashika H. Jayasinghe · Software Engineer · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
