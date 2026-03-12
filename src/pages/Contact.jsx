import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, SendHorizontal, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'bhashika@example.com',
    href: 'mailto:bhashika@example.com',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: null,
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/ScorpioCS9958',
    href: 'https://github.com/ScorpioCS9958',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhashika-jayasinghe',
    href: 'https://www.linkedin.com/in/bhashika-jayasinghe',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((err) => console.error('Form submission error:', err));
  }

  return (
    <section className="min-h-screen bg-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Me</h2>
          <div className="mt-4 w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-8">Let&apos;s Connect</h3>
            <div className="space-y-5">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-indigo-400 transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form (Netlify Forms) */}
          <div className="bg-gray-900 rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h4 className="text-white font-semibold text-xl mb-2">Message Sent!</h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Hidden fields required by Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-1.5">
                      Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-1.5">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-1.5">
                    Subject <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Collaboration"
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <SendHorizontal size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
