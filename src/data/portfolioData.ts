export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  category: 'it' | 'technical' | 'operational';
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; iconName: string; level?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
}

export const personalDetails = {
  fullName: "Ahmad Hadi Lukmanul Hakim",
  shortName: "Ahmad Hadi",
  title: "Junior Software Developer & IT Support Specialist",
  tagline: "Lulusan S1 Teknik Informatika (IPK 3.76) dengan keahlian komprehensif di bidang Software Development, Database Management, dan Infrastruktur IT.",
  email: "ahmad.hadi77738@gmail.com",
  phone: "+62 858 7837 1521",
  whatsappUrl: "https://wa.me/6285878371521?text=Halo%20Ahmad%20Hadi,%20saya%20tertarik%20dengan%20profil%20Anda.",
  location: "Kab. Grobogan, Jawa Tengah",
  gpa: "3.76",
  university: "Universitas Muhammadiyah Semarang (UNIMUS)",
  degree: "S1 Teknik Informatika (Informatics Engineering)",
  educationPeriod: "Nov 2022 - Jul 2026",
  aboutText: "Halo! Saya lulusan S1 Teknik Informatika di Universitas Muhammadiyah Semarang dengan IPK 3.76. Berpengalaman langsung dalam lingkungan kerja teknis maupun medis seperti IT Support & Junior Software Developer di RS Roemani Muhammadiyah dan SIMRS RS PKU Muhammadiyah Gubug. Memiliki etos kerja tinggi, adaptif, dan berpengalaman di berbagai bidang operasional seperti jaringan fiber optik, logistik, hingga kepemimpinan operasional.",
  socials: {
    github: "https://github.com/hadi77738",
    linkedin: "https://linkedin.com/in/ahmadhadi77738",
    email: "mailto:ahmad.hadi77738@gmail.com"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    categoryName: "Web & Software Development",
    skills: [
      { name: "PHP", iconName: "code" },
      { name: "Laravel Framework", iconName: "layers" },
      { name: "Flutter & Mobile Dev", iconName: "smartphone" },
      { name: "WordPress Development", iconName: "globe" },
    ]
  },
  {
    categoryName: "Database & Backend",
    skills: [
      { name: "MySQL Database", iconName: "database" },
      { name: "Oracle Database", iconName: "server" },
      { name: "Firebase Backend", iconName: "server" },
    ]
  },
  {
    categoryName: "IT Support & Network Infrastructure",
    skills: [
      { name: "SIMRS (Sistem Informasi RS)", iconName: "activity" },
      { name: "Jaringan Fiber Optik (Indihome)", iconName: "wifi" },
      { name: "Hardware & Server Maintenance", iconName: "cpu" },
      { name: "Troubleshooting Software", iconName: "wrench" },
    ]
  },
  {
    categoryName: "Office & Operations",
    skills: [
      { name: "Microsoft Excel & Data", iconName: "file-spread-sheet" },
      { name: "Microsoft Word & Office", iconName: "file-text" },
      { name: "Logistik & Quality Control", iconName: "box" },
      { name: "Operational Leadership", iconName: "users" },
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "RS Roemani Muhammadiyah Semarang",
    role: "IT Support & Junior Software Developer",
    period: "Jan 2026 - Jun 2026",
    category: "it",
    description: "Bertanggung jawab atas pemeliharaan infrastruktur IT rumah sakit, troubleshooting database dan software, serta pengembangan modul internal.",
    highlights: [
      "Melakukan troubleshooting software, database, jaringan, dan hardware ringan.",
      "Melakukan pengecekan server secara berkala untuk memastikan reliabilitas Sistem Rumah Sakit.",
      "Melakukan setup perangkat baru sesuai dengan kebutuhan unit dan pengguna internal."
    ]
  },
  {
    id: "exp-2",
    company: "RS PKU Muhammadiyah Gubug",
    role: "IT Support Internship (SIMRS - MBKM)",
    period: "Aug 2024 - Dec 2024",
    category: "it",
    description: "Kegiatan Kerja Praktik MBKM semester 5 difokuskan pada pengoperasian dan pemeliharaan SIMRS (Sistem Informasi Manajemen Rumah Sakit).",
    highlights: [
      "Mengelola alur SIMRS untuk efisiensi operasional pelayanan kesehatan.",
      "Membantu penanganan teknis kendala sistem yang dihadapi dokter dan staf medis.",
      "Mendokumentasikan alur proses dan menguji stabilitas modul SIMRS."
    ]
  },
  {
    id: "exp-3",
    company: "Putra Jaya Raharja (Mitra Indihome)",
    role: "Teknisi Jaringan Optik",
    period: "Mar 2024 - Apr 2024",
    category: "technical",
    description: "Teknisi pasang baru layanan internet fiber optik dan TV kabel pelanggan.",
    highlights: [
      "Menginstalasi kabel drop core dan konfigurasi modem ONT Indihome.",
      "Memastikan kualitas pengukuran redaman sinyal optik (OTDR/OPM) tepat standar.",
      "Troubleshooting konektivitas internet dan memastikan kepuasan jaringan pelanggan."
    ]
  },
  {
    id: "exp-4",
    company: "Industri Plastik Rumahan",
    role: "Operator Logistik & Produksi",
    period: "Nov 2022 - Dec 2025",
    category: "operational",
    description: "Mengoperasikan mesin cetak dan mengawasi alur logistik produksi.",
    highlights: [
      "Mengoperasikan mesin cetak plastik sesuai standar presisi produksi.",
      "Memastikan Quality Control (QC) hasil cetakan dan logistik penyimpanan.",
      "Mengawasi ketepatan alur distribusi barang jadi."
    ]
  },
  {
    id: "exp-5",
    company: "CV Kusuma Tehnik",
    role: "Helper Teknisi AC",
    period: "Apr 2022 - Nov 2022",
    category: "technical",
    description: "Membantu instalasi, perawatan, dan perbaikan unit pendingin udara.",
    highlights: [
      "Menyiapkan peralatan dan membantu perbaikan kompresor & kelistrikan AC.",
      "Melakukan perawatan rutin pembersihan filter dan pengisian freon."
    ]
  },
  {
    id: "exp-6",
    company: "Bielbin's Coffee",
    role: "Head Barista",
    period: "Nov 2020 - Jan 2021",
    category: "operational",
    description: "Mengawasi operasional harian kedai kopi, manajemen tim, dan kualitas produk.",
    highlights: [
      "Mengelola operasional harian dan melatih tim barista baru.",
      "Menjaga standar kualitas minuman dan manajemen stok bahan baku."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Oracle Java Programming",
    issuer: "Oracle Academy",
    date: "Jan 2024 - Sekarang",
    badge: "Java SE & Object-Oriented Architecture"
  },
  {
    title: "Oracle Database Foundation",
    issuer: "Oracle Academy",
    date: "Aug 2023 - Sekarang",
    badge: "SQL, Relational Modeling & Database Administration"
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Idiomatch - Web Kamus & Quiz Idiom",
    category: "Web & Education App",
    description: "Aplikasi web interaktif pencarian kamus dan kuis pembelajaran idiom Bahasa Inggris yang dikembangkan untuk mendukung tugas pembelajaran akademis dosen UNIMUS.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    githubUrl: "https://github.com/hadi77738/idiomatch_web",
    demoUrl: "https://idiomatch.vercel.app"
  },
  {
    id: "proj-2",
    title: "Absensi Smart - Face Recognition & Geolokasi",
    category: "Mobile Application",
    description: "Aplikasi Android presensi cerdas berbasis Flutter dan Firebase yang dilengkapi dengan fitur pengenalan wajah (Face Recognition) dan verifikasi geolokasi lokasi kerja.",
    techStack: ["Flutter", "Dart", "Firebase", "Face Recognition", "Geofencing GPS"],
    featured: true,
    githubUrl: "https://github.com/hadi77738/absensi-smart"
  },
  {
    id: "proj-3",
    title: "Sumber Rejeki Mebel - Company Profile UMKM",
    category: "Web & E-Commerce UMKM",
    description: "Website Company Profile dan katalog produk digital interaktif untuk usaha mebel rumahan di Desa Kebonbatur, Demak guna memperluas jangkauan pemasaran UMKM.",
    techStack: ["Web App", "Tailwind CSS", "Responsive UI", "Vercel"],
    featured: true,
    githubUrl: "https://github.com/hadi77738/sumberrejekimebel",
    demoUrl: "https://sumberrejekimebel.vercel.app"
  },
  {
    id: "proj-4",
    title: "LSPosed GPS Setter - Location Spoofer & Rute",
    category: "Android Modding & Utility System",
    description: "Fork aplikasi Android modul LSPosed untuk simulasi lokasi GPS dengan widget cepat, switch lokasi instan, dan fitur pergerakan rute otomatis (mondar-mandir di rute jalan raya dekat titik palsu).",
    techStack: ["Android Development", "LSPosed Framework", "Java / Kotlin", "GPS Spoofing API"],
    featured: true,
    githubUrl: "https://github.com/hadi77738/LSPosed-GPS-Setter"
  }
];
