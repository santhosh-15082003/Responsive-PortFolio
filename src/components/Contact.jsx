import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#38bdf8', '#0ea5e9', '#3b82f6']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/90 bg-dots-pattern">
      {/* Top Gradient Divider */}
      <div className="section-divider mb-20 max-w-5xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <span className="text-gradient-sky">Exceptional</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Whether you have a full-time role, a freelance inquiry, or simply want to discuss Java & React development—let's get in touch.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Direct Email Card with Copy Action */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/90 shadow-sm bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-sky-300 text-xs font-semibold text-slate-700 hover:text-sky-700 flex items-center gap-1.5 shadow-xs transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</h4>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors mt-1 block truncate"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">Average response time: &lt; 24 hours</p>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/90 shadow-sm bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone / WhatsApp</h5>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/90 shadow-sm bg-white">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Location</h5>
                    <p className="text-xs text-slate-600">{PERSONAL_INFO.location} (Open to Remote & On-site)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-600 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Availability</h5>
                    <p className="text-xs text-sky-700 font-semibold">{PERSONAL_INFO.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels with Instagram & LinkedIn */}
            <div className="glass-card rounded-3xl p-6 border border-slate-200/90 shadow-sm bg-white">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Profiles & Channels</h4>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xs flex flex-col items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 transition-all text-center"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-[11px]">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-xs flex flex-col items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 transition-all text-center"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-[11px]">LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-pink-300 hover:shadow-xs flex flex-col items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-pink-600 transition-all text-center"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-[11px]">Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Animated Focus Glow */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md relative overflow-hidden bg-white">
              
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs text-emerald-700">Thank you for reaching out. Santhosh will get back to you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Name <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Email <span className="text-sky-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                    />
                  </div>

                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Subject / Opportunity Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-time Software Developer, Freelance project, Interview..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message <span className="text-sky-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your role, project requirements, or team..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
