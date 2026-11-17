// Ubah data bisnis di sini
export const site = {
  name: 'Batam Anugerah Production',
  wa: '6281270703110',
  phone: '+62 0812-7070-3110',
  email: 'batamanugrahproduction@gmail.com',
  address: 'Jl. Contoh No. 1, Jakarta',
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
  area: 'Batam dan sekitarnya',
  mapQuery: 'Batam'
}
export const waLink = (text) => `https://wa.me/${site.wa}?text=${encodeURIComponent(text)}`
