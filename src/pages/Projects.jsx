import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with product listings, shopping cart, user authentication, and Stripe payment integration. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/ScorpioCS9958',
    live: '#',
    emoji: '🛍️',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style task management application with drag-and-drop functionality, real-time collaboration, and team workspaces using Firebase.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Drag & Drop'],
    github: 'https://github.com/ScorpioCS9958',
    live: '#',
    emoji: '📋',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather dashboard app that fetches real-time weather data from OpenWeatherMap API, displays forecasts, and shows interactive charts using Chart.js.',
    tags: ['React', 'Chart.js', 'REST API', 'CSS Modules'],
    github: 'https://github.com/ScorpioCS9958',
    live: '#',
    emoji: '🌤️',
    featured: false,
  },
  {
    title: 'Blog CMS',
    description:
      'A headless CMS-powered blog with Markdown support, SEO optimization, and a custom admin dashboard. Deployed on Netlify with continuous deployment.',
    tags: ['Next.js', 'Headless CMS', 'Markdown', 'Netlify'],
    github: 'https://github.com/ScorpioCS9958',
    live: '#',
    emoji: '✍️',
    featured: false,
  },
  {
    title: 'Expense Tracker',
    description:
      'A personal finance app to track income and expenses, visualize spending with interactive charts, and set monthly budgets.',
    tags: ['React', 'TypeScript', 'MongoDB', 'Express'],
    github: 'https://github.com/ScorpioCS9958',
    live: '#',
    emoji: '💰',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description:
      'This very portfolio website! Built with React, Vite, Tailwind CSS v4, React Router DOM, and deployed on Netlify.',
    tags: ['React', 'Vite', 'Tailwind CSS v4', 'Netlify'],
    github: 'https://github.com/ScorpioCS9958/bhashika-portfolio',
    live: '#',
    emoji: '🌐',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">What I&apos;ve built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map(({ title, description, tags, github, live, emoji }) => (
              <div
                key={title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{emoji}</span>
                  <div className="flex gap-3">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${title} GitHub`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                      aria-label={`${title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-300 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full border border-indigo-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map(({ title, description, tags, github, live, emoji }) => (
              <div
                key={title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{emoji}</span>
                  <div className="flex gap-3">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                      aria-label={`${title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
