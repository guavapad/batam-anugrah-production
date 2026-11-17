<script setup>
// ProductCatalog.vue — Vue 3 (Composition API) + Tailwind CSS
// Warna: putih, charcoal #2B2D31, aksen gold #B8934A (pakai arbitrary value, tanpa config tambahan)
import { ref, computed } from 'vue'

import { site } from '../config'
const WA_NUMBER = site.wa

const categories = [
  { key: 'semua', label: 'Semua' },
  { key: 'tenda', label: 'Jenis Tenda' },
  { key: 'perlengkapan', label: 'Perlengkapan Tambahan' },
]

const eventTypes = [
  { key: 'semua', label: 'Semua acara' },
  { key: 'wedding', label: 'Pernikahan' },
  { key: 'pameran', label: 'Pameran' },
  { key: 'konser', label: 'Konser' },
  { key: 'corporate', label: 'Acara perusahaan' },
  { key: 'pribadi', label: 'Pesta pribadi' },
]

// Ganti `image` dengan foto asli produk (rasio 4:3)
const products = [
  { id: 1, category: 'tenda', events: ['pameran', 'konser', 'corporate'], name: 'Tenda Roder', spec: 'Rangka aluminium, atap PVC anti-air, lebar 10–20 m, panjang bisa disambung.', capacity: '100–1.000 orang', image: '/img/tenda-roder.jpg' },
  { id: 2, category: 'tenda', events: ['wedding', 'pribadi', 'corporate'], name: 'Tenda Sarnafil (Kerucut)', spec: 'Atap kerucut putih, tampilan elegan, cocok untuk area terbuka.', capacity: '50–300 orang', image: '/img/tenda-sarnafil.jpg' },
  { id: 3, category: 'tenda', events: ['wedding', 'corporate'], name: 'Tenda Dekorasi VIP', spec: 'Plafon kain, list dekor, dan lampu gantung. Siap pakai untuk tamu undangan.', capacity: '100–500 orang', image: '/img/tenda-vip.jpg' },
  { id: 4, category: 'tenda', events: ['pribadi', 'wedding'], name: 'Tenda Plafon Standard', spec: 'Tenda dengan plafon kain putih, ekonomis untuk hajatan dan acara keluarga.', capacity: '50–200 orang', image: '/img/tenda-plafon.jpg' },
  { id: 5, category: 'tenda', events: ['wedding', 'corporate', 'pribadi'], name: 'Tenda Transparan', spec: 'Atap bening, cocok untuk acara malam hari dan suasana outdoor.', capacity: '50–250 orang', image: '/img/tenda-transparan.jpg' },
  { id: 6, category: 'perlengkapan', events: ['pameran', 'konser', 'corporate'], name: 'AC Portable & Cooling Fan', spec: 'Pendingin ruangan untuk tenda, daya menyesuaikan luas area.', capacity: '± 30 m² per unit', image: '/img/ac-portable.jpg' },
  { id: 7, category: 'perlengkapan', events: ['wedding', 'konser', 'corporate'], name: 'Panggung & Flooring', spec: 'Panggung modular dan lantai karpet/parket, tinggi dan ukuran bisa diatur.', capacity: 'Sesuai ukuran', image: '/img/panggung.jpg' },
  { id: 8, category: 'perlengkapan', events: ['wedding', 'pribadi', 'corporate'], name: 'Kursi Futura / Chivari & Meja', spec: 'Kursi Futura (praktis) atau Chivari (elegan), meja bulat dan persegi.', capacity: 'Mulai 50 kursi', image: '/img/kursi-meja.jpg' },
  { id: 9, category: 'perlengkapan', events: ['konser', 'wedding', 'corporate'], name: 'Sound System & Lighting', spec: 'Speaker, mixer, mic, lampu sorot, dan lampu dekor dengan operator.', capacity: 'Sesuai area acara', image: '/img/sound-lighting.jpg' },
]

const activeCategory = ref('semua')
const activeEvent = ref('semua')

const filtered = computed(() =>
  products.filter(
    (p) =>
      (activeCategory.value === 'semua' || p.category === activeCategory.value) &&
      (activeEvent.value === 'semua' || p.events.includes(activeEvent.value)),
  ),
)

const resetFilter = () => {
  activeCategory.value = 'semua'
  activeEvent.value = 'semua'
}

const quoteLink = (p) => {
  const text = `Halo EventTenda ID, saya ingin meminta penawaran untuk ${p.name}. Tanggal acara: ... Lokasi: ... Perkiraan tamu: ...`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
</script>

<template>
  <section id="katalog" class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Judul -->
      <div class="max-w-2xl">
        <h2 class="text-3xl font-semibold tracking-tight text-[#2B2D31] sm:text-4xl">
          Katalog Tenda & Perlengkapan
        </h2>
        <p class="mt-3 text-base leading-relaxed text-[#2B2D31]/70">
          Pilih tenda dan perlengkapan sesuai jenis acara Anda. Harga final menyesuaikan lokasi dan durasi sewa.
        </p>
      </div>

      <!-- Filter -->
      <div class="mt-8 space-y-4">
        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
          <button
            v-for="c in categories"
            :key="c.key"
            type="button"
            :aria-pressed="activeCategory === c.key"
            class="rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8934A] focus-visible:ring-offset-2"
            :class="
              activeCategory === c.key
                ? 'border-[#2B2D31] bg-[#2B2D31] text-white'
                : 'border-gray-300 bg-white text-[#2B2D31] hover:border-[#2B2D31]'
            "
            @click="activeCategory = c.key"
          >
            {{ c.label }}
          </button>
        </div>

        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter jenis acara">
          <button
            v-for="e in eventTypes"
            :key="e.key"
            type="button"
            :aria-pressed="activeEvent === e.key"
            class="rounded-full px-3.5 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8934A] focus-visible:ring-offset-2"
            :class="
              activeEvent === e.key
                ? 'bg-[#B8934A] font-medium text-white'
                : 'bg-gray-100 text-[#2B2D31]/80 hover:bg-gray-200'
            "
            @click="activeEvent = e.key"
          >
            {{ e.label }}
          </button>
        </div>
      </div>

      <!-- Grid produk -->
      <ul v-if="filtered.length" class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="p in filtered"
          :key="p.id"
          class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
        >
          <div class="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#2B2D31] to-[#4a4d55] px-4 text-center text-sm text-white/70">Foto {{ p.name }}</div>

          <div class="flex flex-1 flex-col p-5">
            <h3 class="text-lg font-semibold text-[#2B2D31]">{{ p.name }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-[#2B2D31]/70">{{ p.spec }}</p>

            <p class="mt-4 text-sm text-[#2B2D31]">
              <span class="text-[#2B2D31]/60">Kapasitas: </span>
              <span class="font-medium">{{ p.capacity }}</span>
            </p>

            <a
              :href="quoteLink(p)"
              target="_blank"
              rel="noopener"
              class="mt-5 inline-flex items-center justify-center rounded-lg bg-[#2B2D31] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#B8934A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8934A] focus-visible:ring-offset-2"
            >
              Minta Penawaran
            </a>
          </div>
        </li>
      </ul>

      <!-- Kondisi kosong -->
      <div v-else class="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center">
        <p class="text-[#2B2D31]">Belum ada produk untuk kombinasi filter ini.</p>
        <button
          type="button"
          class="mt-4 text-sm font-medium text-[#B8934A] underline underline-offset-4"
          @click="resetFilter"
        >
          Tampilkan semua produk
        </button>
      </div>
    </div>
  </section>
</template>
