<script setup>
const clients = ['Nusantara EO', 'Bintang Karya', 'Prima Event', 'Sinar Mas Grup', 'Kampus Bersama']
const reviews = [
  { name: 'Rina & Dimas', role: 'Pasangan pengantin', text: 'Tenda bersih, dekorasinya rapi, dan tim datang lebih awal dari jadwal. Keluarga kami sangat puas.', stars: 5 },
  { name: 'Hendra S.', role: 'Panitia pameran', text: 'Tenda roder terpasang sehari sebelum acara dan kuat saat hujan deras. Harga sesuai penawaran.', stars: 5 },
  { name: 'Maya P.', role: 'Event organizer', text: 'Komunikasi cepat lewat WhatsApp dan survei lokasinya membantu kami menentukan ukuran yang pas.', stars: 5 },
]
</script>
<template>
  <section id="tentang" class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <h2 class="font-serif text-3xl font-semibold sm:text-4xl">Dipercaya untuk ratusan acara</h2>
        <p class="mt-3 leading-relaxed text-charcoal/70">EventTenda ID menyewakan tenda dan perlengkapan event dengan tim pemasang sendiri, bukan perantara. Itu sebabnya kualitas dan jadwal bisa kami jaga.</p>
      </div>
      <ul class="mt-8 flex flex-wrap gap-3">
        <li v-for="c in clients" :key="c" class="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-charcoal/70">{{ c }}</li>
      </ul>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <figure v-for="r in reviews" :key="r.name" class="rounded-xl border border-gray-200 bg-white p-6">
          <div class="text-gold" :aria-label="`${r.stars} dari 5 bintang`">{{ '★'.repeat(r.stars) }}</div>
          <blockquote class="mt-3 text-sm leading-relaxed text-charcoal/80">{{ r.text }}</blockquote>
          <figcaption class="mt-4 text-sm"><span class="font-semibold">{{ r.name }}</span><span class="text-charcoal/60"> · {{ r.role }}</span></figcaption>
        </figure>
      </div>
      <p class="mt-4 text-xs text-charcoal/50">Ulasan di atas contoh. Ganti dengan ulasan asli atau pasang widget Google Reviews.</p>
    </div>
  </section>
</template>
