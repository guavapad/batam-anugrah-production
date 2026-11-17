<script setup>
import { ref } from 'vue'
import { site, waLink } from '../config'
const open = ref(false)
const links = [['Beranda','#beranda'],['Katalog Tenda','#katalog'],['Paket Sewa','#paket'],['Galeri Portofolio','#galeri'],['Tentang Kami','#tentang'],['Kontak','#kontak']]
</script>
<template>
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="#beranda" class="flex items-center gap-2 font-serif text-xl font-semibold text-charcoal">
        <span class="flex h-8 w-8 items-center justify-center rounded bg-charcoal text-sm text-gold"><img src="../assets/logo.jpg" alt=""></span>{{ site.name }}
      </a>
      <nav class="hidden items-center gap-6 text-sm lg:flex" aria-label="Menu utama">
        <a v-for="l in links" :key="l[1]" :href="l[1]" class="text-charcoal/80 hover:text-gold">{{ l[0] }}</a>
      </nav>
      <div class="hidden items-center gap-2 lg:flex">
        <a href="#katalog" class="rounded-lg bg-charcoal px-4 py-2 text-sm font-medium text-white hover:bg-gold">Katalog & Sewa</a>
        <a :href="waLink('Halo EventTenda ID, saya ingin konsultasi sewa tenda.')" target="_blank" rel="noopener" class="rounded-lg border border-gold px-4 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-white">WhatsApp Kami</a>
      </div>
      <button class="rounded p-2 lg:hidden" :aria-expanded="open" aria-label="Buka menu" @click="open = !open">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path v-if="!open" d="M4 6h16M4 12h16M4 18h16"/><path v-else d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </div>
    <div v-show="open" class="border-t border-gray-200 bg-white px-4 py-3 lg:hidden">
      <a v-for="l in links" :key="l[1]" :href="l[1]" class="block py-2 text-charcoal" @click="open = false">{{ l[0] }}</a>
      <div class="mt-3 flex gap-2">
        <a href="#katalog" class="flex-1 rounded-lg bg-charcoal px-4 py-2 text-center text-sm font-medium text-white" @click="open = false">Katalog & Sewa</a>
        <a :href="waLink('Halo EventTenda ID, saya ingin konsultasi sewa tenda.')" target="_blank" rel="noopener" class="flex-1 rounded-lg border border-gold px-4 py-2 text-center text-sm font-medium text-gold">WhatsApp</a>
      </div>
    </div>
  </header>
</template>
