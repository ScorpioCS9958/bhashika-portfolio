const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Python', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 60 },
    ],
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'MySQL', level: 78 },
      { name: 'Firebase', level: 65 },
      { name: 'AWS (basics)', level: 55 },
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Agile / Scrum', level: 85 },
      { name: 'CI/CD', level: 65 },
    ],
  },
];

const techBadges = [
  'React', 'Vite', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
  'Python', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Git', 'Docker',
  'Firebase', 'AWS', 'GraphQL', 'REST API', 'HTML5', 'CSS3',
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">What I know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills &amp; Technologies</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-white font-semibold text-base mb-6 border-b border-gray-700 pb-3">
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm">{name}</span>
                      <span className="text-indigo-400 text-xs font-semibold">{level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-indigo-600 to-purple-500 rounded-full"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-6">Technologies I work with</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="bg-gray-900 border border-gray-700 text-gray-300 text-sm px-4 py-1.5 rounded-full hover:border-indigo-500 hover:text-indigo-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
