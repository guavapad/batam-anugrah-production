<script setup>
import { ref, computed } from 'vue'
import { waLink } from '../config'
// Angka di bawah hanya contoh. Sesuaikan dengan harga sewa Anda.
const events = {
  wedding:   { label: 'Pernikahan',        m2: 1.2, tent: 'Tenda Dekorasi VIP',  rate: 65000 },
  pameran:   { label: 'Pameran',           m2: 2.0, tent: 'Tenda Roder',         rate: 45000 },
  konser:    { label: 'Konser',            m2: 0.8, tent: 'Tenda Roder',         rate: 45000 },
  corporate: { label: 'Acara perusahaan',  m2: 1.5, tent: 'Tenda Sarnafil',      rate: 55000 },
  pribadi:   { label: 'Pesta pribadi',     m2: 1.2, tent: 'Tenda Plafon Standard', rate: 40000 },
}
const zones = { dalam: ['Dalam kota', 0], sekitar: ['Sekitar kota (≤ 50 km)', 500000], luar: ['Luar kota (> 50 km)', 1500000] }
const type = ref('wedding'), guests = ref(150), zone = ref('dalam')
const area = computed(() => Math.ceil((guests.value || 0) * events[type.value].m2))
const size = computed(() => { const w = area.value > 300 ? 10 : 6; return `${w} x ${Math.ceil(area.value / w)} m` })
const price = computed(() => area.value * events[type.value].rate + zones[zone.value][1])
const rp = (n) => 'Rp ' + n.toLocaleString('id-ID')
const msg = computed(() => `Halo EventTenda ID, saya butuh ${events[type.value].tent} untuk ${events[type.value].label}, ±${guests.value} tamu, lokasi ${zones[zone.value][0]}. Estimasi ${rp(price.value)}. Mohon penawaran resmi.`)
</script>
<template>
  <section id="paket" class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 class="font-serif text-3xl font-semibold sm:text-4xl">Hitung Estimasi Paket Sewa</h2>
      <p class="mt-3 max-w-2xl text-charcoal/70">Isi tiga data di bawah untuk mendapat rekomendasi ukuran tenda dan perkiraan biaya. Harga final ditentukan setelah survei lokasi.</p>
      <div class="mt-8 grid gap-6 rounded-xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-8">
        <div class="space-y-5">
          <label class="block text-sm font-medium">Jenis acara
            <select v-model="type" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 font-normal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option v-for="(e, k) in events" :key="k" :value="k">{{ e.label }}</option>
            </select>
          </label>
          <label class="block text-sm font-medium">Perkiraan jumlah tamu
            <input v-model.number="guests" type="number" min="10" max="5000" step="10" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 font-normal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </label>
          <label class="block text-sm font-medium">Lokasi acara
            <select v-model="zone" class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 font-normal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option v-for="(z, k) in zones" :key="k" :value="k">{{ z[0] }}</option>
            </select>
          </label>
        </div>
        <div class="flex flex-col justify-between rounded-lg bg-charcoal p-6 text-white">
          <dl class="space-y-3 text-sm">
            <div class="flex justify-between gap-4"><dt class="text-white/60">Rekomendasi tenda</dt><dd class="text-right font-medium">{{ events[type].tent }}</dd></div>
            <div class="flex justify-between gap-4"><dt class="text-white/60">Luas area</dt><dd class="font-medium">± {{ area }} m²</dd></div>
            <div class="flex justify-between gap-4"><dt class="text-white/60">Ukuran disarankan</dt><dd class="font-medium">{{ size }}</dd></div>
          </dl>
          <div class="mt-6">
            <p class="text-sm text-white/60">Estimasi biaya</p>
            <p class="font-serif text-3xl text-gold">{{ rp(price) }}</p>
            <a :href="waLink(msg)" target="_blank" rel="noopener" class="mt-4 block rounded-lg bg-gold px-4 py-3 text-center font-medium hover:bg-[#a07f3c]">Kirim ke WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
