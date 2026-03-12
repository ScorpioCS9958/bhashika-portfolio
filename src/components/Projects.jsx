import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Users, GraduationCap, Bot, Globe, ShoppingCart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Procurement Management & ERP System',
    description:
      'Full-featured enterprise web application for CSquare Technologies. Streamlines purchasing, supplier handling, inventory control, and workflows with role-based dashboards for officers, approvers, admins, and executives.',
    icon: ShoppingCart,
    color: '#00ff88',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'AJAX', 'n8n', 'RESTful APIs'],
    features: [
      'Role-based dashboards (Officer, Approver, Admin, Executive)',
      'Supplier registration, scoring & performance tracking',
      'Multi-level purchase requisition & order processing',
      'Real-time inventory with low-stock alerts',
      'Secure session management & form validation',
    ],
    type: 'Enterprise',
    highlight: true,
  },
{
  id: 2,
  title: 'Portfolio Responsive Website',
  description:
    'A personal portfolio website showcasing my projects, skills, and experience. Built for performance, responsiveness, and modern design, it highlights my work, technical expertise, and allows visitors to easily connect with me for collaborations or inquiries.',
  icon: Globe,
  color: '#a855f7',
  tags: ['React', 'Node.js', 'TailwindCSS' , 'JavaScript' , 'Netlify'],
  features: [
    'Interactive project showcase',
    'Responsive design for all devices',
    'Fast, modern, and fully deployed online',
  ],
  type: 'Web App',
  highlight: false,
},
  {
    id: 3,
    title: 'Student Management System',
    description:
      'Web-based platform supporting academic and administrative operations. Features student and lecturer dashboards, timetables, exam results, GPA calculator, and secure authentication.',
    icon: GraduationCap,
    color: '#00ccff',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3'],
    features: [
      'Student & Lecturer role-based dashboards',
      'Lecture timetable & exam results module',
      'GPA calculator with dynamic computation',
      'Department management system',
      'Responsive UI for all screen sizes',
    ],
    type: 'Web App',
    highlight: false,
  },
  {
    id: 4,
    title: 'College Website',
    description:
      'Fully responsive and informative website for a college, with staff profiles, course listings, academic info, contact forms, and announcements. Features smooth scroll animations.',
    icon: Globe,
    color: '#a855f7',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'AOS Library'],
    features: [
      'Responsive design for desktop & mobile',
      'Staff directory with photos',
      'Course listings with category filters',
      'AOS scroll animations',
      'Contact form with validation',
    ],
    type: 'Website',
    highlight: false,
  },
  {
    id: 5,
    title: 'Google Gemini 2.0 Chat App Clone',
    description:
      'Responsive AI chatbot application built with React.js and Google Gemini API. Features real-time conversational responses and multi-chat history management.',
    icon: Bot,
    color: '#f59e0b',
    tags: ['React.js', 'Google Gemini API', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Real-time AI conversational responses',
      'Multi-chat history management',
      'Asynchronous data handling',
      'State management with React hooks',
      'Responsive modern UI',
    ],
    type: 'AI App',
    highlight: false,
  },
  {
    id: 6,
    title: 'ATDigital Web Design UI',
    description:
      'Modern, responsive website for ATDigital focused on strong UI/UX principles. Showcases digital marketing services with clean layouts, scroll animations, and brand-consistent design.',
    icon: Layers,
    color: '#ec4899',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Figma', 'AOS Library'],
    features: [
      'Home, Services, About & Contact sections',
      'Brand-consistent color scheme',
      'Scroll animations with AOS',
      'Fully responsive across all devices',
      'Figma-designed UI',
    ],
    type: 'UI/UX',
    highlight: false,
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef();

  const filters = ['All', 'Enterprise', 'Web App', 'Website', 'AI App', 'UI/UX'];

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <span className="text-[#00ff88] text-sm font-mono tracking-widest uppercase">03. Portfolio</span> */}
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Featured <span className="text-[#00ff88]">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-[#00ff88] text-black font-bold shadow-[0_0_20px_rgba(0,255,136,0.4)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative bg-white/[0.03] border rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 ${
                  project.highlight
                    ? 'border-[#00ff88]/30 md:col-span-2 lg:col-span-1'
                    : 'border-white/10 hover:border-opacity-40'
                } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  '--c': project.color,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 70%)` }}
                />

                {project.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-[#00ff88] text-black text-xs font-bold px-3 py-1 rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}
                    >
                      <Icon size={22} style={{ color: project.color }} />
                    </div>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{ color: project.color, backgroundColor: `${project.color}15` }}
                    >
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl leading-tight group-hover:text-opacity-90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <span style={{ color: project.color }}>▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
