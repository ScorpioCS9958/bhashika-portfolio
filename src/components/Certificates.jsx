import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Wifi, Code, Terminal, Lock } from 'lucide-react';

const certs = [
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2025 – Present',
    icon: Shield,
    color: '#ef4444',
    category: 'Security',
  },
  {
    title: 'Networking Defense',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026 – Present',
    icon: Lock,
    color: '#f59e0b',
    category: 'Security',
  },
    {
    title: 'FullStack Developer',
    issuer: 'University of Moratuwa',
    date: 'Sep 2025 – Present',
    icon: Code,
    color: '#ec4899',
    category: 'Programming',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2024 – Present',
    icon: Code,
    color: '#f59e0b',
    category: 'Programming',
  },
  {
    title: 'NDG Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    date: 'Aug 2021',
    icon: Terminal,
    color: '#00ff88',
    category: 'Linux',
  },
  {
    title: 'NDG Linux Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    icon: Terminal,
    color: '#00ccff',
    category: 'Linux',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2021',
    icon: Shield,
    color: '#ec4899',
    category: 'Security',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2020',
    icon: Shield,
    color: '#a855f7',
    category: 'Security',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025 – Present',
    icon: Wifi,
    color: '#06b6d4',
    category: 'Networking',
  },
];

export default function Certificates() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <span className="text-[#00ff88] text-sm font-mono tracking-widest uppercase">04. Certifications</span> */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="text-[#00ff88]">Certificates</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full mx-auto" />
          <p className="text-gray-500 mt-4">All certified by Cisco Networking Academy</p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-opacity-40 hover:-translate-y-1 transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}10 0%, transparent 60%)` }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                  >
                    <Icon size={20} style={{ color: cert.color }} />
                  </div>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ color: cert.color, backgroundColor: `${cert.color}15` }}
                  >
                    {cert.category}
                  </span>
                  <h3 className="text-white font-bold text-sm leading-tight mt-1">{cert.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-gray-600 text-xs mt-1 font-mono">{cert.date}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cisco badge */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
            <Award size={24} className="text-[#00ff88]" />
            <div className="text-left">
              <p className="text-white font-bold">Cisco Networking Academy</p>
              <p className="text-gray-500 text-sm">4 Certifications Earned</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
