<template>
  <div id="app">
    <navbar />
    <b-container fluid>
      <!-- Content here -->
      <router-view />
    </b-container>
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
// Your variable overrides
$primary: #1d2675;
$secondary: #8cd2f4;
$cool-gray: #717173;
$light-gray: #919095;

$body-bg: $secondary;

// Bootstrap and its default variables
@import "../node_modules/bootstrap/scss/bootstrap";
// BootstrapVue and its default variables
@import "../node_modules/bootstrap-vue/src/index.scss";
</style>
