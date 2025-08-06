<script setup>
import aboutcards from '@/components/aboutcards.vue';
defineOptions({
  name: 'AboutPage',
  components: {
    aboutcards,
  },
});
</script>

<template>
  <main class="container">
    <v-row dense class="pa-4 my-4 cards">
      <v-col cols="12" md="4">
        <aboutcards />
      </v-col>
      <v-col cols="12" md="4">
        <aboutcards />
      </v-col>
      <v-col cols="12" md="4">
        <aboutcards />
      </v-col>
    </v-row>
    <v-expansion-panels>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
          consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
          consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel class="mb-2">
        <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
          Item
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </main>
</template>

<style>

</style>
