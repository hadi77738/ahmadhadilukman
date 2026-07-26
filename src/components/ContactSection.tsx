"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolioData";
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const text = `Halo Ahmad Hadi,%0ANama: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APesan: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/6285878371521?text=${text}`, "_blank");
    
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-dark-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-blue-400">
            Mari Terhubung
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Hubungi Saya Hari Ini
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Apakah Anda memiliki tawaran pekerjaan, proyek freelance, atau pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="w-12 h-1 bg-brand-blue dark:bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Card */}
            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    WhatsApp Direct
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalDetails.phone}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    Alamat Email
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalDetails.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 transition-colors"
                title="Salin Alamat Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Domisili
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {personalDetails.location}
                </p>
              </div>
            </div>

          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-dark-card p-7 rounded-2xl border border-slate-200/80 dark:border-dark-border shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                Kirim Pesan Langsung
              </h4>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Email Anda (opsional)
                </label>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Pesan Anda *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan tawaran atau pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-brand-blue dark:focus:ring-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-brand-blue hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp Chat</span>
              </button>

              {formSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs text-center font-semibold border border-emerald-500/20">
                  Pesan berhasil disiapkan! Jendela WhatsApp otomatis dibuka.
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
