import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/ScorpioCS9958',
    icon: <Github size={18} />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/bhashika-jayasinghe',
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:bhashika@example.com',
    icon: <Mail size={18} />,
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Bhashika H. Jayasinghe
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
