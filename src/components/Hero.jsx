import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'PHP & JavaScript Developer',
  'React Developer',
  'IT Solutions Expert',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 60 : 100;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ccff]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#7c3aed]/6 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full text-sm text-[#00ff88]">
            <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            Available for Work
          </div>

          <div>
            <p className="text-gray-400 text-lg mb-2 font-light tracking-wider uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-white">Bhashika H.</span>
              <br />
              <span className="bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#7c3aed] bg-clip-text text-transparent">
                Jayasinghe
              </span>
            </h1>
          </div>

          <div className="h-12 flex items-center">
            <span className="text-2xl font-semibold text-gray-300">
              {displayText}
              <span className="text-[#00ff88] animate-pulse">|</span>
            </span>
          </div>

          {/* <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Motivated Physical Sciences graduate with expertise in full-stack development.
            Currently at <span className="text-[#00ff88] font-semibold">CSquare Fintec</span>  building
            enterprise solutions with PHP, JavaScript, MySQL & n8n automation.
          </p> */}
<p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto text-justify">
  Driven <span className="text-[#00ff88]">full-stack developer </span> with a Physical Sciences background. Delivered ERP systems, 
  student management apps, and responsive websites. Passionate about problem solving and 
  currently exploring exciting new roles.
</p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-black font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Hire Me
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-[#00ff88]/30 text-[#00ff88] font-semibold rounded-xl hover:bg-[#00ff88]/10 hover:border-[#00ff88]/60 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/ScorpioCS9958"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#00ff88]/30 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/bhashikahirusha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:bhashikahiru9958@gmail.com"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#ea4335] hover:bg-[#ea4335]/10 hover:border-[#ea4335]/30 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+94763547687"
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10 hover:border-[#00ff88]/30 transition-all duration-300"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div
          className={`flex justify-center md:justify-end transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Rotating ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#00ff88]/30"
              style={{
                animation: 'spin 20s linear infinite',
                margin: '-20px',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-[#00ccff]/20"
              style={{
                animation: 'spin 15s linear infinite reverse',
                margin: '-40px',
              }}
            />

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-[#00ccff]/20 rounded-full blur-3xl" />

            {/* Profile image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0f] relative">
               {/* <div className="absolute inset-0 rounded-full border-4 border-[#00ff88]/40 z-10" /> */}
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                <img
                  src={profileImg}
                  alt="Bhashika H. Jayasinghe"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #00ff88 0%, #00ccff 50%, #7c3aed 100%)';
                    e.target.parentElement.innerHTML += '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;color:rgba(0,0,0,0.7)">BJ</div>';
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 bg-[#1a1a2e] border border-[#00ff88]/30 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-lg font-bold text-[#00ff88]">1+ Year</p>
            </div>
            <div className="absolute -left-4 bottom-12 bg-[#1a1a2e] border border-[#00ccff]/30 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-xs text-gray-400">Projects</p>
              <p className="text-lg font-bold text-[#00ccff]">8+ Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#00ff88] transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
