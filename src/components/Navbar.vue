<template>
  <v-app-bar app color="indigo-darken-4" dark>
    <v-container class="d-flex align-center">
      <v-toolbar-title>
        <router-link class="navbar-brand" to="/">Geenux</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-tabs>
          <v-tab v-for="item in navItems" :key="item.text" :to="item.to">{{ item.text }}</v-tab>
        </v-tabs>
        <div class="group ml-4">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
              </path>
            </g>
          </svg>
          <input placeholder="Search" type="search" class="form-control input" />
          <button class="subbtn" type="submit">Search</button>
        </div>
      </div>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list>
      <v-list-item>
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
              </path>
            </g>
          </svg>
          <input placeholder="Search" type="search" class="input form-control" />
          <button class="subbtn" type="submit">Search</button>
        </div>
      </v-list-item>
      <v-list-item v-for="item in navItems" :key="item.text" :to="item.to">
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      drawer: false,
      navItems: [
        { text: "Home", to: "/" },
        { text: "About", to: "/about" },
        { text: "Services", to: "/services" },
        { text: "Contact", to: "/contact" },
      ],
    };
  },
  computed: {
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

.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 260px;
}

.input {
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  outline: none;
  background-color: #000000;
  color: #ffffff;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
.input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #000000;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}

.subbtn {
  border: none;
  outline: none;
  background-color: #6c5ce7;
  font-size: 12px;
  margin-top: -0.3px;
  padding: 0.392rem 1rem;
  font-weight: 700;
  color: #fff;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}
</style>
