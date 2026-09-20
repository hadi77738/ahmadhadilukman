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
  ArrowUpRight, 
  Sparkles,
  Phone,
  Clock
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

const inquiryTypes = [
  { id: "job", label: "Peluang Kerja / Rekrutmen" },
  { id: "project", label: "Proyek Web / Mobile Dev" },
  { id: "it", label: "Konsultasi IT & Jaringan" },
  { id: "other", label: "Pertanyaan Umum" },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("job");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const inquiryLabel = inquiryTypes.find(t => t.id === selectedInquiry)?.label || "Inquiry";
    const text = `Halo Ahmad Hadi,%0ASaya tertarik menghubungi Anda terkait *${encodeURIComponent(inquiryLabel)}*.%0A%0A*Nama:* ${encodeURIComponent(formData.name)}%0A*Email/Kontak:* ${encodeURIComponent(formData.email || "-")}%0A*Pesan:* ${encodeURIComponent(formData.message || "-")}`;

    window.open(`https://wa.me/6285878371521?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-dark-surface/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mari Berkolaborasi & Terhubung
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Terbuka untuk kesempatan kerja penuh waktu, proyek pengembangan perangkat lunak, 
            maupun konsultasi dukungan IT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Direct Card */}
            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <SpotlightCard className="p-5 flex items-center justify-between hover-glow">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      WhatsApp Direct
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {personalDetails.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </SpotlightCard>
            </a>

            {/* Email Card */}
            <SpotlightCard className="p-5 flex items-center justify-between hover-glow">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-blue-400 flex items-center justify-center border border-brand-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    Alamat Email Resmi
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {personalDetails.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-card hover:bg-slate-200 dark:hover:bg-dark-surface text-slate-600 dark:text-slate-300 transition-colors"
                title="Salin Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </SpotlightCard>

            {/* Location & Availability Card */}
            <SpotlightCard className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Lokasi & Domisili
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalDetails.location}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-dark-border flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Siap bekerja On-site maupun Remote (WIB / Waktu Indonesia).</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: Interactive Quick Message Dispatcher */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Kirim Pesan Cepat via WhatsApp
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Pilih topik pembicaraan dan isi formulir singkat untuk langsung terhubung ke chat WhatsApp saya.
                  </p>
                </div>

                {/* Inquiry Type Chips */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Topik / Kebutuhan:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedInquiry(type.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all ${
                          selectedInquiry === type.id
                            ? "bg-brand-500/10 text-brand-600 dark:text-blue-400 border border-brand-500/30 shadow-xs"
                            : "bg-slate-50 dark:bg-dark-card text-slate-600 dark:text-slate-400 border border-light-border dark:border-dark-border hover:bg-slate-100"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Nama Lengkap Anda:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso (HR / Client)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Email atau No. Telp (Opsional):
                    </label>
                    <input
                      type="text"
                      placeholder="budi@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Pesan / Ringkasan Tawaran:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Halo Ahmad Hadi, kami tertarik mendiskusikan peluang kerja untuk posisi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-card border border-light-border dark:border-dark-border text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Langsung ke WhatsApp</span>
                </button>
              </form>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
