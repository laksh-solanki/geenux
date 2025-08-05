<template>
  <v-app-bar app color="indigo-darken-4" dark>
    <v-container class="d-flex align-center">
      <v-toolbar-title>
        <router-link class="navbar-brand" to="/">Geenux</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex align-center">
        <v-tabs v-model="activeTab" :show-arrows="false" class="w-100">
          <v-tab to="/" value="home">Home</v-tab>
          <v-tab to="/about" value="about">About</v-tab>
          <v-tab to="/services" value="services">Services</v-tab>
          <v-tab to="/contact" value="contact">Contact</v-tab>
        </v-tabs>
        <search-bar class="w-50"></search-bar>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list>
      <v-list-item>
        <search-bar></search-bar>
      </v-list-item>
      <v-list-item to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item to="/services">
        <v-list-item-title>Services</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contact">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "AppNavbar",
  components: {
    SearchBar,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    activeTab: {
      get() {
        return this.$route.path.substring(1) || 'home';
      },
      set() {},
    },
    isMobile() {
      return this.$vuetify.display.mdAndDown;
    },
  },
  watch: {
    isMobile(newVal) {
      if (!newVal) {
        this.drawer = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");

.navbar-brand {
  color: #ffffff !important;
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  margin-right: 2rem;
}

.nav-link {
  font-family: "Rubik", sans-serif;
  color: #fff !important;
  font-weight: 500;
  margin-right: 1rem;
  text-transform: none;
}

.router-link-active {
  color: #0d6efd !important;
}

.v-container{
  margin-right: 100px;
}
</style>
