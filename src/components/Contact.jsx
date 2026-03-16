import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Build form data exactly as Netlify expects
    const body = new URLSearchParams({
      'form-name': 'contact',
      'bot-field': '',
      name: form.name,
      email: form.email,
      subject: form.subject || 'Portfolio Contact - No Subject',
      message: form.message,
    }).toString();

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 8000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'bhashikahiru9958@gmail.com', href: 'mailto:bhashikahiru9958@gmail.com', color: '#00ff88' },
    { icon: Phone, label: 'Phone', value: '+94 76 354 7687', href: 'tel:+94763547687', color: '#00ccff' },
    { icon: MapPin, label: 'Location', value: 'Sri Lanka 🇱🇰', href: null, color: '#a855f7' },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[#00ff88] text-sm font-mono tracking-widest uppercase">05. Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Get In <span className="text-[#00ff88]">Touch</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full mx-auto" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left - Contact Info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-[#00ff88]/10 to-[#00ccff]/5 border border-[#00ff88]/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Let's Work Together</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}15`, border: `1px solid ${info.color}25` }}
                      >
                        <Icon size={18} style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-gray-200 text-sm font-medium hover:text-[#00ff88] transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200 text-sm font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-4">Connect on Social</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://github.com/ScorpioCS9958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm transition-all duration-300 hover:text-white hover:bg-white/10"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/bhashikahirusha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm transition-all duration-300 hover:text-[#0077b5] hover:bg-[#0077b5]/10"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:bhashikahiru9958@gmail.com"
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm transition-all duration-300 hover:text-[#ea4335] hover:bg-[#ea4335]/10"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-5"
            >
              {/* Required hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot - spam protection (hidden from real users) */}
              <div style={{ display: 'none' }}>
                <input type="text" name="bot-field" tabIndex="-1" autoComplete="off" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-2 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ff88]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-2 block">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ff88]/50 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Project / Collaboration"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ff88]/50 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 mb-2 block">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ff88]/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-80 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <><CheckCircle size={18} /> Message Sent!</>
                ) : loading ? (
                  <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              {/* Success message */}
              {sent && (
                <div className="p-4 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-xl text-center">
                  <p className="text-[#00ff88] font-semibold text-sm">🎉 Message delivered to my inbox!</p>
                  <p className="text-gray-400 text-xs mt-1">I'll reply to your email within 24 hours.</p>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <p className="text-red-400 font-semibold text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> Failed to send. Please email me directly:
                  </p>
                  <a href="mailto:bhashikahiru9958@gmail.com" className="text-[#00ff88] text-sm mt-1 block hover:underline">
                    bhashikahiru9958@gmail.com
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
