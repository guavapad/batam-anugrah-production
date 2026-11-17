<script setup>
import { reactive } from 'vue'
import { site, waLink } from '../config'
const f = reactive({ nama: '', wa: '', tanggal: '', jenis: 'Pernikahan', lokasi: '', catatan: '' })
const submit = () => {
  const t = `Halo EventTenda ID, saya ingin memesan.\nNama: ${f.nama}\nNo. WA: ${f.wa}\nTanggal acara: ${f.tanggal}\nJenis acara: ${f.jenis}\nLokasi: ${f.lokasi}\nCatatan: ${f.catatan || '-'}`
  window.open(waLink(t), '_blank', 'noopener')
}
const input = 'mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 font-normal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'
</script>
<template>
  <section id="kontak" class="bg-white py-16 sm:py-20">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="font-serif text-3xl font-semibold sm:text-4xl">Pesan atau Konsultasi</h2>
        <p class="mt-3 text-charcoal/70">Isi form, lalu kami lanjutkan lewat WhatsApp untuk penawaran dan jadwal survei.</p>
        <form class="mt-6 space-y-4" @submit.prevent="submit">
          <label class="block text-sm font-medium">Nama<input v-model="f.nama" required :class="input" /></label>
          <label class="block text-sm font-medium">No. WhatsApp<input v-model="f.wa" required type="tel" inputmode="tel" placeholder="08xxxxxxxxxx" :class="input" /></label>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block text-sm font-medium">Tanggal acara<input v-model="f.tanggal" required type="date" :class="input" /></label>
            <label class="block text-sm font-medium">Jenis acara
              <select v-model="f.jenis" :class="input"><option>Pernikahan</option><option>Pameran</option><option>Konser</option><option>Acara perusahaan</option><option>Pesta pribadi</option></select>
            </label>
          </div>
          <label class="block text-sm font-medium">Lokasi acara<input v-model="f.lokasi" required :class="input" /></label>
          <label class="block text-sm font-medium">Catatan kebutuhan<textarea v-model="f.catatan" rows="3" :class="input"></textarea></label>
          <button class="w-full rounded-lg bg-charcoal px-4 py-3 font-medium text-white hover:bg-gold">Kirim Pesanan via WhatsApp</button>
        </form>
      </div>
      <div>
        <iframe :src="`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`" title="Lokasi gudang EventTenda ID" loading="lazy" class="h-72 w-full rounded-xl border border-gray-200"></iframe>
        <dl class="mt-6 space-y-3 text-sm">
          <div><dt class="font-semibold">WhatsApp / Telepon</dt><dd class="text-charcoal/70">{{ site.phone }}</dd></div>
          <div><dt class="font-semibold">Email</dt><dd class="text-charcoal/70">{{ site.email }}</dd></div>
          <div><dt class="font-semibold">Alamat gudang</dt><dd class="text-charcoal/70">{{ site.address }}</dd></div>
          <div><dt class="font-semibold">Jam operasional</dt><dd class="text-charcoal/70">{{ site.hours }}</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>
