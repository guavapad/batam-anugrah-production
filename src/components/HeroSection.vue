<script setup>
import { site, waLink } from '../config'
const features = [
  ['Tenda Bersih & Terawat', 'Setiap tenda dicuci dan diperiksa sebelum dikirim. Tamu Anda datang ke tempat yang rapi, bukan tenda kusam.'],
  ['Pemasangan Tepat Waktu & Profesional', 'Tim kami tiba sesuai jadwal dan selesai sebelum acara dimulai. Anda fokus pada acara, pasang-bongkar kami yang urus.'],
  ['Gratis Biaya Survei Lokasi', 'Kami datang, mengukur area, dan menyarankan ukuran tenda yang pas. Tanpa biaya, tanpa kewajiban memesan.'],
  ['Harga Transparan & Paket Fleksibel', 'Rincian harga dijelaskan di awal, tanpa biaya tersembunyi. Pilih paket siap pakai atau susun sesuai anggaran.'],
]
</script>
<template>
  <section id="beranda">
    <div class="bg-gradient-to-br from-charcoal via-[#3a3d44] to-[#1c1d20] text-white">
      <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <h1 class="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Tenda & Perlengkapan Event Mewah untuk Momen yang Tak Terlupakan
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Melayani pernikahan, pameran, konser, dan acara perusahaan di {{ site.area }}. Tenda bersih, dipasang tepat waktu oleh tim berpengalaman, dengan harga yang jelas sejak awal.
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#katalog" class="rounded-lg bg-gold px-6 py-3 text-center font-medium text-white hover:bg-[#a07f3c]">Cek Harga & Katalog</a>
          <a :href="waLink('Halo EventTenda ID, saya ingin konsultasi gratis.')" target="_blank" rel="noopener" class="rounded-lg border border-white/40 px-6 py-3 text-center font-medium hover:bg-white/10">Konsultasi Gratis via WA</a>
        </div>
      </div>
    </div>
    <div class="bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div v-for="f in features" :key="f[0]" class="rounded-xl border border-gray-200 p-6">
          <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3 class="font-semibold">{{ f[0] }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-charcoal/70">{{ f[1] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
