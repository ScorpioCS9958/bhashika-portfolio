import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
                Bhashika
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6">
              Software Developer from Sri Lanka 🇱🇰
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Passionate about building elegant, high-performance web applications. I craft clean code
              and intuitive user experiences with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View My Work <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-950 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Download size={18} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="https://github.com/ScorpioCS9958"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhashika-jayasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Avatar / illustration */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-linear-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-2xl shadow-indigo-900/40">
              <span className="text-7xl sm:text-8xl select-none">👩‍💻</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 border-t border-gray-800 pt-12">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Completed' },
            { value: '15+', label: 'Technologies' },
            { value: '100%', label: 'Passion for Code' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-indigo-400">{value}</p>
              <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
