<script setup>
import { site } from '../config'
const faqs = [
  ['Berapa ukuran tenda yang saya butuhkan?', 'Sebagai patokan, satu orang duduk kursi butuh sekitar 1 m². Panggung, prasmanan, atau area lesehan perlu ruang tambahan. Survei lokasi gratis kami membantu menentukan ukuran yang pas.'],
  ['Berapa lama sebelum acara saya harus memesan?', 'Kami sarankan 2–4 minggu sebelumnya, lebih awal untuk akhir pekan, libur panjang, dan musim pernikahan. Pesanan mendadak tetap bisa dicoba sesuai ketersediaan.'],
  ['Apakah harga sudah termasuk pemasangan dan pembongkaran?', 'Ya, sudah termasuk. Biaya transportasi bisa berbeda menurut jarak dan akan dijelaskan di penawaran sebelum Anda setuju.'],
  ['Bagaimana sistem pembayarannya?', 'Uang muka (DP) untuk mengunci tanggal, lalu pelunasan sebelum atau saat pemasangan. Besaran DP tertera di surat penawaran.'],
  ['Bagaimana jika hujan atau cuaca buruk?', 'Atap tenda kami anti-air dan rangkanya kokoh untuk hujan biasa. Untuk angin kencang atau cuaca ekstrem, tim kami menyarankan penguatan tambahan. Hubungi kami kapan saja sebelum acara.'],
]
const socials = [['Instagram','https://instagram.com'],['TikTok','https://tiktok.com'],['YouTube','https://youtube.com']]
</script>
<template>
  <footer class="bg-charcoal text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div class="lg:col-span-2">
        <h2 class="font-serif text-2xl">Pertanyaan Umum</h2>
        <div class="mt-4 divide-y divide-white/15 border-y border-white/15">
          <details v-for="q in faqs" :key="q[0]" class="group py-3">
            <summary class="cursor-pointer list-none font-medium marker:hidden hover:text-gold">{{ q[0] }}</summary>
            <p class="mt-2 text-sm leading-relaxed text-white/70">{{ q[1] }}</p>
          </details>
        </div>
      </div>
      <div>
        <h2 class="font-serif text-2xl">{{ site.name }}</h2>
        <nav class="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70" aria-label="Menu footer">
          <a href="#katalog" class="hover:text-gold">Katalog Tenda</a><a href="#paket" class="hover:text-gold">Paket Sewa</a>
          <a href="#galeri" class="hover:text-gold">Galeri</a><a href="#kontak" class="hover:text-gold">Kontak</a>
        </nav>
        <div class="mt-6 flex gap-4 text-sm">
          <a v-for="s in socials" :key="s[0]" :href="s[1]" target="_blank" rel="noopener" class="text-gold hover:underline">{{ s[0] }}</a>
        </div>
      </div>
    </div>
    <p class="border-t border-white/15 py-5 text-center text-xs text-white/50">© {{ new Date().getFullYear() }} {{ site.name }}. Hak cipta dilindungi.</p>
  </footer>
</template>
