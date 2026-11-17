<script setup>
import { ref, computed } from 'vue'
const filters = [['semua','Semua'],['wedding','Wedding'],['corporate','Corporate Event'],['pameran','Pameran']]
// Ganti `title` dan tambahkan properti `image` bila foto asli sudah ada
const items = [
  { id: 1, type: 'wedding', title: 'Resepsi taman, tenda transparan' },
  { id: 2, type: 'wedding', title: 'Pelaminan, tenda dekorasi VIP' },
  { id: 3, type: 'corporate', title: 'Gathering tahunan, tenda sarnafil' },
  { id: 4, type: 'corporate', title: 'Peluncuran produk, panggung & lighting' },
  { id: 5, type: 'pameran', title: 'Pameran UMKM, tenda roder 15 m' },
  { id: 6, type: 'pameran', title: 'Expo otomotif, flooring & AC portable' },
]
const active = ref('semua')
const shown = computed(() => items.filter(i => active.value === 'semua' || i.type === active.value))
</script>
<template>
  <section id="galeri" class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="font-serif text-3xl font-semibold sm:text-4xl">Galeri Portofolio</h2>
      <p class="mt-3 max-w-2xl text-charcoal/70">Hasil pemasangan di lokasi klien, dari lahan kosong sampai siap dipakai.</p>
      <div class="mt-6 flex flex-wrap gap-2">
        <button v-for="f in filters" :key="f[0]" type="button" :aria-pressed="active === f[0]" @click="active = f[0]"
          class="rounded-full px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          :class="active === f[0] ? 'bg-charcoal text-white' : 'bg-gray-100 hover:bg-gray-200'">{{ f[1] }}</button>
      </div>
      <ul class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="i in shown" :key="i.id" class="overflow-hidden rounded-xl border border-gray-200">
          <div class="grid grid-cols-2 text-center text-xs text-white">
            <div class="flex h-36 items-end bg-gray-400 p-2">Sebelum</div>
            <div class="flex h-36 items-end bg-gradient-to-br from-charcoal to-[#4a4d55] p-2">Sesudah</div>
          </div>
          <p class="p-4 text-sm font-medium">{{ i.title }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
