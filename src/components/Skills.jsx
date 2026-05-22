import { useEffect, useRef, useState } from 'react';

// const skillCategories = [
//   {
//     title: 'Frontend',
//     color: '#00ff88',
//     skills: [
//       { name: 'HTML5 / CSS3', level: 95 },
//       { name: 'JavaScript (ES6+)', level: 88 },
//       { name: 'React.js', level: 80 },
//       { name: 'Bootstrap 5', level: 90 },
//       { name: 'jQuery / AJAX', level: 85 },
//     ],
//   },
//   {
//     title: 'Backend & DB',
//     color: '#00ccff',
//     skills: [
//       { name: 'PHP', level: 88 },
//       { name: 'MySQL', level: 87 },
//       { name: 'MongoDB', level: 65 },
//       { name: 'RESTful APIs', level: 80 },
//       { name: 'Python', level: 72 },
//     ],
//   },
//   {
//     title: 'Tools & Others',
//     color: '#a855f7',
//     skills: [
//       { name: 'Git / GitHub', level: 85 },
//       { name: 'n8n Automation', level: 78 },
//       { name: 'Figma', level: 75 },
//       { name: 'Linux (Ubuntu)', level: 70 },
//       { name: 'Cybersecurity Basics', level: 72 },
//     ],
//   },
// ];
const skillCategories = [
  {
    title: 'Frontend',
    color: '#00ff88',
    priority: 1,
    skills: [
      { name: 'HTML5 / CSS3', icon: '📄', level: 95, priority: 1 },
      { name: 'JavaScript (ES6+)', icon: '⚡', level: 88, priority: 2 },
      { name: 'React.js', icon: '⚛️', level: 80, priority: 3 },
      { name: 'Bootstrap 5', icon: '📦', level: 90, priority: 4 },
      { name: 'TailwindCSS', icon: '💨', level: 82, priority: 5 },
      { name: 'jQuery / AJAX', icon: '🔄', level: 85, priority: 6 },
    ],
  },
  {
    title: 'Backend & DB',
    color: '#00ccff',
    priority: 2,
    skills: [
      { name: 'PHP', icon: '🐘', level: 88, priority: 1 },
      { name: 'MySQL', icon: '🗄️', level: 87, priority: 2 },
      { name: 'RESTful APIs', icon: '🔌', level: 80, priority: 3 },
      { name: 'Node.js', icon: '🟢', level: 75, priority: 4 },
      { name: 'Express.js', icon: '🚂', level: 72, priority: 5 },
      { name: 'Python', icon: '🐍', level: 72, priority: 6 },
      { name: 'FastAPI', icon: '⚡', level: 68, priority: 7 },
      // { name: 'MongoDB', icon: '🍃', level: 65, priority: 8 },
      { name: 'SQLite', icon: '💾', level: 75, priority: 9 },
      { name: 'Supabase', icon: '🟩', level: 65, priority: 10 },
    ],
  },
  {
    title: 'Tools & Others',
    color: '#a855f7',
    priority: 3,
    skills: [
      { name: 'Git / GitHub', icon: '🐙', level: 85, priority: 1 },
      { name: 'n8n Automation', icon: '⚙️', level: 78, priority: 2 },
      { name: 'Linux (Ubuntu)', icon: '🐧', level: 70, priority: 3 },
      { name: 'Figma', icon: '🎭', level: 75, priority: 4 },
      { name: 'Adobe Photoshop', icon: '🖼️', level: 70, priority: 5 },
      { name: 'Netlify', icon: '🌐', level: 75, priority: 6 },
      { name: 'Chart.js', icon: '📊', level: 68, priority: 7 },
      { name: 'Cybersecurity Basics', icon: '🛡️', level: 72, priority: 8 },
    ],
  },
  {
    title: 'Desktop & AI',
    color: '#f59e0b',
    priority: 4,
    skills: [
      { name: 'C#', icon: '🔷', level: 60, priority: 1 },
      { name: '.NET 8', icon: '🟣', level: 68, priority: 2 },
      { name: 'WPF', icon: '🖥️', level: 65, priority: 3 },
      { name: 'Dapper', icon: '🔗', level: 62, priority: 4 },
      { name: 'Claude API', icon: '🤖', level: 70, priority: 5 },
      { name: 'Google Gemini API', icon: '💎', level: 72, priority: 6 },
    ],
  },
];
// const techBadges = [
//   { name: 'PHP', icon: '🐘' },
//   { name: 'JavaScript', icon: '⚡' },
//   { name: 'React.js', icon: '⚛️' },
//   { name: 'Python', icon: '🐍' },
//   { name: 'MySQL', icon: '🗄️' },
//   { name: 'MongoDB', icon: '🍃' },
//   { name: 'HTML5', icon: '📄' },
//   { name: 'CSS3', icon: '🎨' },
//   { name: 'Bootstrap', icon: '📦' },
//   { name: 'jQuery', icon: '💜' },
//   { name: 'AJAX', icon: '🔄' },
//   { name: 'Git', icon: '🌳' },
//   { name: 'GitHub', icon: '🐙' },
//   { name: 'n8n', icon: '⚙️' },
//   { name: 'Figma', icon: '🎭' },
//   { name: 'Adobe PS', icon: '🖼️' },
//   { name: 'Linux', icon: '🐧' },
//   { name: 'REST APIs', icon: '🔌' },
// ];

const techBadges = [
  // Programming Languages
  { name: 'PHP', icon: '🐘' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'C#', icon: '🔷' },

  // Frontend Development
  { name: 'React.js', icon: '⚛️' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Bootstrap 5', icon: '📦' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'jQuery', icon: '💜' },
  { name: 'AJAX', icon: '🔄' },
  { name: 'Vite', icon: '⚡' },

  // Backend & APIs
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'RESTful APIs', icon: '🔌' },

  // Databases
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'SQLite', icon: '💾' },
  { name: 'Supabase', icon: '🟩' },

  // Desktop Development
  { name: '.NET 8', icon: '🟣' },
  { name: 'WPF', icon: '🖥️' },
  { name: 'Dapper', icon: '🔗' },

  // Tools & Platforms
  { name: 'Git', icon: '🌳' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Netlify', icon: '🌐' },
  { name: 'n8n', icon: '⚙️' },

  // Design & Visualization
  { name: 'Figma', icon: '🎭' },
  { name: 'Adobe Photoshop', icon: '🖼️' },
  { name: 'Chart.js', icon: '📊' },
  { name: 'AOS Library', icon: '✨' },

  // AI & Project Specific
  { name: 'Claude API', icon: '🤖' },
  { name: 'Google Gemini API', icon: '💎' },
  { name: 'POS Systems', icon: '🧾' },
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

        {/* <div className="grid md:grid-cols-3 gap-6 mb-12"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories .map((cat, i) => (
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
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  {[...skillCategories]
    .sort((a, b) => a.priority - b.priority)
    .map((cat, i) => (
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
            style={{
              backgroundColor: cat.color,
              boxShadow: `0 0 10px ${cat.color}`,
            }}
          />
          <h3 className="text-white font-bold text-lg">{cat.title}</h3>
        </div>

        <div className="space-y-5">
          {[...cat.skills]
            .sort((a, b) => a.priority - b.priority)
            .map((skill) => (
              <SkillBar
                key={skill.name}
                {...skill}
                color={cat.color}
                animate={visible}
              />
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
