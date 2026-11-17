<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProductCatalog from './components/ProductCatalog.vue'
import PriceCalculator from './components/PriceCalculator.vue'
import GallerySection from './components/GallerySection.vue'
import Testimonials from './components/Testimonials.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>
<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ProductCatalog />
    <PriceCalculator />
    <GallerySection />
    <Testimonials />
    <ContactSection />
  </main>
  <AppFooter />
</template>
