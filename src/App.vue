<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>

<template>
  <v-app theme="dark">
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
