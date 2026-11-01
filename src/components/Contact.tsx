import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, AlertCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Format alamat email tidak valid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link
    const subject = encodeURIComponent(`[Inquiry Portofolio] Pesan dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Callysta,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim melalui Website Portofolio`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#58A6FF] block mb-2">
            Hubungi Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's work together!
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Terbuka untuk magang, proyek data, dan kolaborasi. Kirim pesan, saya akan membalas secepatnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 3 Clickable Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy Feature */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#58A6FF]/10 text-[#58A6FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Surel Pribadi
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-[#58A6FF] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  className={`p-2.5 rounded-xl border transition-all ${
                    copiedEmail
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1.5'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#58A6FF] hover:border-[#58A6FF]/40'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#58A6FF]/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Koneksi Profesional
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#58A6FF] transition-colors">
                    LinkedIn / Callysta Dethan
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#58A6FF] transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-[#58A6FF]/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Repositori Kode
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#58A6FF] transition-colors">
                    github.com/Callysta27
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#58A6FF] transition-colors" />
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Kirim Pesan Langsung
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Isi form berikut untuk mengirim pesan langsung ke inbox saya melalui aplikasi email Anda.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Aplikasi email telah dibuka!</span>
                  <span>Jika jendela email tidak muncul otomatis, Anda dapat menyalin email ke <strong>{PERSONAL_INFO.email}</strong>.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="Contoh: Budi Santoso"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-rose-400 focus:ring-rose-400/40'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-[#58A6FF] focus:border-[#58A6FF]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Alamat Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="nama@perusahaan.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-rose-400 focus:ring-rose-400/40'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-[#58A6FF] focus:border-[#58A6FF]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pesan Anda <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Tuliskan tawaran magang, peluang proyek, atau pesan kolaborasi..."
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/60 border text-slate-900 dark:text-white placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 ${
                    errors.message
                      ? 'border-rose-400 focus:ring-rose-400/40'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-[#58A6FF] focus:border-[#58A6FF]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#58A6FF] hover:bg-[#4a8fe0] rounded-xl transition-all shadow-md shadow-[#58A6FF]/25 hover:shadow-lg hover:shadow-[#58A6FF]/35 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A6FF]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
