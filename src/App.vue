<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import Navbar from "@/components/shared/Navbar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
  },
});
</script>


<style lang="scss">
// Global Styles Here
</style>
