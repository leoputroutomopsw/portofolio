import { useState } from 'react'

import fotoProfil from './assets/foto formal.jpeg'

import bps1 from './assets/dokumentasi/bps-1.jpg'
import bps2 from './assets/dokumentasi/bps-2.jpg'

import imigrasi1 from './assets/dokumentasi/imigrasi-1.jpg'
import imigrasi2 from './assets/dokumentasi/imigrasi-2.jpg'

import mbkm1 from './assets/dokumentasi/mbkm-1.jpg'
import mbkm2 from './assets/dokumentasi/mbkm-2.jpg'

import {
  Mail,
  MessageCircle,
} from 'lucide-react'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#07152f] to-[#020617] text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold">
            Portfolio<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
  Experience
            </a>
            <a href="#activities" className="transition hover:text-cyan-400">
              Activities
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-lg border border-white/10 px-3 py-2 text-xl text-cyan-400 md:hidden"
  aria-label="Toggle menu"
>
  ☰
</button>
{menuOpen && (
  <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur md:hidden">
    <div className="flex flex-col gap-4 text-sm text-slate-300">
      
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="transition hover:text-cyan-400"
      >
        About
      </a>

      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className="transition hover:text-cyan-400"
      >
        Skills
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="transition hover:text-cyan-400"
      >
        Experience
      </a>

      <a
        href="#activities"
        onClick={() => setMenuOpen(false)}
        className="transition hover:text-cyan-400"
      >
        Activities
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="transition hover:text-cyan-400"
      >
        Contact
      </a>

    </div>
  </div>
)}

        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Professional Profile
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Leo Putro Utomo
                <br />
                <span className="text-cyan-400">
                  Panji Setyo Wicaksono
                </span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
                Corporate Social Responsibility,
                <br />
                Public Relations & Human Resource
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:mx-0">
                Lulusan Antropologi Sosial dengan pengalaman di bidang Humas,
                pelayanan masyarakat, administrasi, dokumentasi, serta pengumpulan
                dan pengolahan data. Memiliki kemampuan komunikasi, kerja sama,
                dan ketelitian, serta tertarik pada bidang Corporate Social
                Responsibility, Public Relations & Human Resource.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Lihat Project
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">

                {/* Glow behind photo */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80">
                  <img
                    src={fotoProfil}
                    alt="Foto profil Leo Putro Utomo Panji Setyo Wicaksono"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* About */}
        
         <section id="about" className="relative px-6 py-24">
  <div className="mx-auto max-w-6xl">

<div className="mb-12 text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    About Me
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Mengenal Saya Lebih Dekat
  </h2>
</div>

<div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

  {/* Profile Description */}
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
    <p className="leading-8 text-slate-300">
      Saya merupakan lulusan Antropologi Sosial Universitas Tanjungpura
      dengan latar belakang dan pengalaman dalam bidang Hubungan Masyarakat,
      pelayanan masyarakat, administrasi, dokumentasi, serta pengumpulan
      dan pengolahan data.
    </p>

    <p className="mt-5 leading-8 text-slate-400">
      Selama menempuh pendidikan dan pengalaman profesional, saya terlibat
      dalam berbagai kegiatan yang membutuhkan kemampuan komunikasi,
      koordinasi, ketelitian, kerja sama tim, serta kemampuan beradaptasi
      dengan berbagai lingkungan kerja dan masyarakat.
    </p>

    <p className="mt-5 leading-8 text-slate-400">
      Saya memiliki ketertarikan untuk mengembangkan karier di bidang
      Corporate Social Responsibility, Public Relations, dan Human Resource,
      sekaligus terus mengembangkan kemampuan profesional melalui berbagai
      pengalaman dan kegiatan.
    </p>
  </div>

  {/* Education & Focus */}
  <div className="space-y-6">

    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-7">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        Education
      </p>

      <h3 className="mt-3 text-xl font-bold text-white">
        Universitas Tanjungpura
      </h3>

      <p className="mt-2 text-slate-400">
        Antropologi Sosial
      </p>

      <p className="mt-2 text-sm text-slate-500">
        2020 — 2025
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        Career Focus
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Corporate Social Responsibility
        </span>

        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Public Relations
        </span>

        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Human Resource
        </span>
      </div>
    </div>

  </div>
</div>


  </div>
</section>


        {/* Projects */}
        <section id="projects" className="relative px-6 py-24">
  <div className="mx-auto max-w-6xl">


<div className="mb-12 text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    Experience
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Pengalaman Profesional
  </h2>

  <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
    Beberapa pengalaman yang membentuk kemampuan saya dalam komunikasi,
    pelayanan masyarakat, administrasi, dokumentasi, serta pengumpulan
    dan pengolahan data.
  </p>
</div>

<div className="grid gap-6">

  {/* BPS */}
  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Juni 2026 — Agustus 2026
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Enumerator
        </h3>

        <p className="mt-1 text-slate-300">
          Badan Pusat Statistik
        </p>
      </div>

      <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        Data Collection
      </span>
    </div>

    <p className="mt-5 leading-7 text-slate-400">
      Terlibat dalam kegiatan pengumpulan data dengan melakukan pendataan
      di lapangan, berinteraksi dengan responden, serta memastikan data
      yang diperoleh sesuai dengan kebutuhan kegiatan.
    </p>
  </div>

  {/* Imigrasi */}
  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          November 2025 — Mei 2026
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          Hubungan Masyarakat
        </h3>

        <p className="mt-1 text-slate-300">
          Kantor Imigrasi Kelas II TPI Entikong
        </p>
      </div>

      <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        Public Relations
      </span>
    </div>

    <p className="mt-5 leading-7 text-slate-400">
      Berkontribusi dalam kegiatan Hubungan Masyarakat, pelayanan
      masyarakat, administrasi, dokumentasi, serta mendukung penyampaian
      informasi dan kegiatan institusi kepada masyarakat.
    </p>
  </div>

  {/* MBKM */}
  <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Oktober 2023 — November 2023
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          MBKM — Proyek Kemanusiaan
        </h3>

        <p className="mt-1 text-slate-300">
          Program Merdeka Belajar Kampus Merdeka
        </p>
      </div>

      <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        Humanitarian Project
      </span>
    </div>

    <p className="mt-5 leading-7 text-slate-400">
      Mengikuti kegiatan Proyek Kemanusiaan yang melibatkan kerja sama,
      interaksi dengan masyarakat, koordinasi kegiatan, serta pengalaman
      langsung dalam lingkungan sosial dan kemanusiaan.
    </p>
  </div>

</div>


  </div>
</section>

        {/* Skills */}

<section id="skills" className="relative bg-slate-900/60 px-6 py-24">
  <div className="mx-auto max-w-6xl">


<div className="mb-12 text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    Skills
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Kompetensi & Keahlian
  </h2>

  <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
    Kemampuan yang saya kembangkan melalui pendidikan, pengalaman kerja,
    kegiatan organisasi, dan berbagai kegiatan sosial.
  </p>
</div>

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">💬</div>
    <h3 className="text-xl font-bold">Komunikasi</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Komunikasi dan interaksi dengan masyarakat serta mendukung
      penyampaian informasi dalam kegiatan Hubungan Masyarakat.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">📢</div>
    <h3 className="text-xl font-bold">Public Relations</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Pengalaman mendukung kegiatan Humas, pelayanan masyarakat,
      dokumentasi, dan penyampaian informasi institusi.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">📊</div>
    <h3 className="text-xl font-bold">Pengumpulan & Pengolahan Data</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Pengalaman dalam pengumpulan data lapangan, pendataan responden,
      serta pengolahan data sesuai kebutuhan kegiatan.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">📁</div>
    <h3 className="text-xl font-bold">Administrasi</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Pengalaman mendukung pekerjaan administrasi dan pengelolaan
      kebutuhan dokumentasi kegiatan.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">📸</div>
    <h3 className="text-xl font-bold">Dokumentasi</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Pengalaman dalam dokumentasi kegiatan sebagai bagian dari
      pelaksanaan dan publikasi kegiatan.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
    <div className="mb-4 text-3xl">🤝</div>
    <h3 className="text-xl font-bold">Kerja Sama & Organisasi</h3>
    <p className="mt-3 leading-7 text-slate-400">
      Pengalaman bekerja sama dalam kegiatan organisasi, pelayanan
      masyarakat, dan proyek yang melibatkan berbagai pihak.
    </p>
  </div>

</div>


  </div>
</section>

        {/* Activities */}

<section id="activities" className="relative bg-slate-900/60 px-6 py-24">
  <div className="mx-auto max-w-6xl">


{/* Section Header */}
<div className="mb-12 text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    Activities
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Activities & Documentation
  </h2>

  <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
    Dokumentasi beberapa kegiatan dan pengalaman yang saya ikuti
    dalam bidang pelayanan masyarakat, Hubungan Masyarakat,
    pengumpulan data, serta kegiatan sosial.
  </p>
</div>

{/* BPS */}
<div className="mb-16">
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
      Juni 2026 — Agustus 2026
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      Enumerator — Badan Pusat Statistik
    </h3>

    <p className="mt-2 text-slate-400">
      Kegiatan pengumpulan data dan pendataan lapangan.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2">
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={bps1}
  alt="Dokumentasi kegiatan Enumerator BPS"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>

    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={bps2}
  alt="Dokumentasi kegiatan Enumerator BPS"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>
  </div>
</div>

{/* Imigrasi */}
<div className="mb-16">
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
      November 2025 — Mei 2026
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      Hubungan Masyarakat — Kantor Imigrasi Kelas II TPI Entikong
    </h3>

    <p className="mt-2 text-slate-400">
      Kegiatan Hubungan Masyarakat, pelayanan masyarakat,
      administrasi, dan dokumentasi.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2">
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={imigrasi1}
  alt="Dokumentasi kegiatan Hubungan Masyarakat"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>

    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={imigrasi2}
  alt="Dokumentasi kegiatan Hubungan Masyarakat"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>
  </div>
</div>

{/* MBKM */}
<div>
  <div className="mb-6">
    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
      Oktober 2023 — November 2023
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      MBKM — Proyek Kemanusiaan
    </h3>

    <p className="mt-2 text-slate-400">
      Kegiatan sosial, kemanusiaan, kerja sama, dan interaksi
      bersama masyarakat.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2">
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={mbkm1}
  alt="Dokumentasi MBKM Proyek Kemanusiaan"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>

    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
  src={mbkm2}
  alt="Dokumentasi MBKM Proyek Kemanusiaan"
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
/>

    </div>
  </div>
</div>


  </div>
</section>


        {/* Contact */}

<section id="contact" className="relative px-6 py-24">
  <div className="mx-auto max-w-5xl">


<div className="mb-12 text-center">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    Contact
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Mari Terhubung
  </h2>

  <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
    Terbuka untuk kesempatan profesional, kolaborasi, maupun diskusi
    terkait Corporate Social Responsibility, Public Relations,
    Human Resource, dan kegiatan sosial.
  </p>
</div>

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

  {/* Email */}
  <a
    href="mailto:leoputroutomopsw@gmail.com"
    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
  >
    <Mail
      size={34}
      strokeWidth={1.7}
      className="mx-auto text-cyan-400 transition duration-300 group-hover:scale-110"
    />

    <h3 className="mt-5 font-bold">
      Email
    </h3>

    <p className="mt-2 break-all text-sm text-slate-400">
  leoputroutomopsw@gmail.com
</p>
  </a>

  {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/leoputroutomopsw/"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
>

  {/* LOGO LINKEDIN */}
  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-md bg-cyan-400 text-lg font-bold text-slate-950 transition duration-300 group-hover:scale-110">
    in
  </div>

  <h3 className="mt-5 font-bold">
    LinkedIn
  </h3>

  <p className="mt-2 text-sm text-slate-400">
    Profil LinkedIn
  </p>
</a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/6289694153817"
    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
  >
    <MessageCircle
      size={34}
      strokeWidth={1.7}
      className="mx-auto text-cyan-400 transition duration-300 group-hover:scale-110"
    />

    <h3 className="mt-5 font-bold">
      WhatsApp
    </h3>

    <p className="mt-2 text-sm text-slate-400">
      Hubungi melalui WhatsApp
    </p>
  </a>

  {/* Instagram */}
<a
  href="https://www.instagram.com/leopupsw/"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
>

  {/* LOGO INSTAGRAM */}
  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border-2 border-cyan-400 text-sm font-bold text-cyan-400 transition duration-300 group-hover:scale-110">
    ◎
  </div>

  <h3 className="mt-5 font-bold">
    Instagram
  </h3>

  <p className="mt-2 text-sm text-slate-400">
    Profil Instagram
  </p>
</a>

</div>


  </div>
</section>



      </main>
    </div>
  )
}

export default App