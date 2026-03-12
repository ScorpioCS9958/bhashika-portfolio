import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#00ff88',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 80 },
      { name: 'Bootstrap 5', level: 90 },
      { name: 'jQuery / AJAX', level: 85 },
    ],
  },
  {
    title: 'Backend & DB',
    color: '#00ccff',
    skills: [
      { name: 'PHP', level: 88 },
      { name: 'MySQL', level: 87 },
      { name: 'MongoDB', level: 65 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Python', level: 72 },
    ],
  },
  {
    title: 'Tools & Others',
    color: '#a855f7',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'n8n Automation', level: 78 },
      { name: 'Figma', level: 75 },
      { name: 'Linux (Ubuntu)', level: 70 },
      { name: 'Cybersecurity Basics', level: 72 },
    ],
  },
];

const techBadges = [
  { name: 'PHP', icon: '🐘' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Bootstrap', icon: '📦' },
  { name: 'jQuery', icon: '💜' },
  { name: 'AJAX', icon: '🔄' },
  { name: 'Git', icon: '🌳' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'n8n', icon: '⚙️' },
  { name: 'Figma', icon: '🎭' },
  { name: 'Adobe PS', icon: '🖼️' },
  { name: 'Linux', icon: '🐧' },
  { name: 'REST APIs', icon: '🔌' },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300 font-medium">{name}</span>
        <span style={{ color }} className="font-mono font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: animate ? `0 0 8px ${color}60` : 'none',
            transitionDelay: '200ms',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ccff]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <span className="text-[#00ff88] text-sm font-mono tracking-widest uppercase">02. Skills</span> */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="text-[#00ff88]">Expertise</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-opacity-30 transition-all duration-700 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                '--hover-color': cat.color,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                />
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-gray-500 text-sm mb-6 tracking-widest uppercase">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-mono hover:border-[#00ff88]/40 hover:text-[#00ff88] hover:bg-[#00ff88]/5 transition-all duration-300 cursor-default flex items-center gap-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
