<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
// Global Styles Here
</style>
