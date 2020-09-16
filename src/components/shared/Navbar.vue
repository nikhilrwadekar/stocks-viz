<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="/">
      <!-- <b-img src="./../../assets/logo_mcap.gif" fluid alt="MCAP Logo"></b-img> -->
      <b-navbar-brand href="/">{{appName}}</b-navbar-brand>
    </b-navbar-brand>

    <b-navbar-toggle v-if="authenticated" target="nav-collapse"></b-navbar-toggle>

    <b-collapse v-if="authenticated" id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown @click="SET_CURRENT_LANGUAGE" :text="currentLanguage" right>
          <b-dropdown-item value="EN">EN</b-dropdown-item>
          <b-dropdown-item value="FR">FR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="username" right>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <b-dropdown v-else @click="SET_CURRENT_LANGUAGE" :text="currentLanguage" right>
      <b-dropdown-item value="EN">EN</b-dropdown-item>
      <b-dropdown-item value="FR">FR</b-dropdown-item>
    </b-dropdown>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  name: "Navbar",
  methods: {
    ...mapActions(["LOGOUT"]),
    ...mapMutations(["SET_CURRENT_LANGUAGE"]),
    logout() {
      this.LOGOUT().then(() => {
        this.$router.go(0);
      });
    },
  },
  computed: {
    ...mapGetters(["currentLanguage", "authenticated", "username"]),
    appName() {
      return process.env.VUE_APP_TITLE || "Stock History App";
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
