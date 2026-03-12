import { MapPin, GraduationCap, Briefcase, User } from 'lucide-react';

const timeline = [
  {
    icon: <GraduationCap size={18} />,
    year: '2019 – 2023',
    title: 'BSc in Computer Science',
    org: 'University of Sri Lanka',
    desc: 'Graduated with First Class Honours. Focused on software engineering, data structures, and web development.',
  },
  {
    icon: <Briefcase size={18} />,
    year: '2023 – Present',
    title: 'Software Developer',
    org: 'Tech Company, Colombo',
    desc: 'Building full-stack web applications using React, Node.js, and cloud services. Collaborating with cross-functional teams to deliver quality software.',
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Who I am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300">
                <User size={22} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Bhashika H. Jayasinghe</h3>
                <p className="text-indigo-400 text-sm flex items-center gap-1">
                  <MapPin size={13} /> Colombo, Sri Lanka
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              I&apos;m a passionate <span className="text-indigo-400 font-medium">Software Developer</span> with
              over 3 years of experience building modern web applications. I love turning complex problems
              into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-5">
              When I&apos;m not coding, I enjoy contributing to open-source projects, learning new technologies,
              and exploring the beautiful landscapes of Sri Lanka.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to write clean, maintainable code that makes a real difference in people&apos;s lives.
              I believe in continuous learning and collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Name', value: 'Bhashika H. Jayasinghe' },
                { label: 'Location', value: 'Colombo, Sri Lanka' },
                { label: 'Email', value: 'bhashika@example.com' },
                { label: 'Availability', value: 'Open to Opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-8">My Journey</h3>
            <div className="relative pl-8 border-l-2 border-indigo-900 space-y-10">
              {timeline.map(({ icon, year, title, org, desc }) => (
                <div key={title} className="relative">
                  <div className="absolute -left-[2.15rem] w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center text-white">
                    {icon}
                  </div>
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">{year}</p>
                  <h4 className="text-white font-semibold text-base">{title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
