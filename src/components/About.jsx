import { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Briefcase, Terminal } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Built', icon: Terminal },
  { value: '1+', label: 'Years Experience', icon: Briefcase },
  { value: '10+', label: 'Certifications', icon: GraduationCap },
  { value: '100%', label: 'Dedication', icon: '⚡' },
];

export default function About() {
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
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <span className="text-[#00ff88] text-sm font-mono tracking-widest uppercase">01. About</span> */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Who Am <span className="text-[#00ff88]">I?</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed text-justify">
<p>
  I'm a <span className="text-white font-semibold">Software Engineer</span> and Physical Sciences graduate from the South Eastern University of Sri Lanka, with strong foundations in Computer Science, Mathematics, and Applied Statistics.
</p>
<p>
  I recently worked as a <span className="text-[#00ff88] font-semibold">Software Engineer at CSquare Fintec</span>, contributing to full-stack development of enterprise ERP systems, procurement platforms, and automation workflows using n8n.
</p>
<p>
  I also founded <span className="text-[#00ccff] font-semibold">Scorpio Computer Solution</span> in Ampara, delivering IT services, technical support, and custom PC solutions since 2020.
</p>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} className="text-[#00ff88]" />
              <span>Colombo / Ampara, Sri Lanka</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                ['Name', 'Bhashika H. Jayasinghe'],
                ['Email', 'bhashikahiru9958@gmail.com'],
                ['Phone', '+94 76 354 7687'],
                ['Status', 'Open to Opportunities'],
              ].map(([key, val]) => (
                <div key={key} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#00ff88]/30 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">{key}</p>
                  <p className="text-sm text-white font-medium truncate">{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 text-center hover:border-[#00ff88]/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-black bg-gradient-to-r from-[#00ff88] to-[#00ccff] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}

            {/* Education Card */}
            <div className="col-span-2 bg-gradient-to-br from-[#00ff88]/10 to-[#00ccff]/5 border border-[#00ff88]/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00ff88]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} className="text-[#00ff88]" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">B.Sc. Physical Science</h3>
                  <p className="text-[#00ff88] text-sm">South Eastern University of Sri Lanka</p>
                  <p className="text-gray-500 text-xs mt-1">2020 – 2024 | Computer Science, Math & Statistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
