<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand :href="`/${$i18n.locale}/`">
      <!-- <b-img src="./../../assets/logo_mcap.gif" fluid alt="MCAP Logo"></b-img> -->
      <b-navbar-brand :href="`/${$i18n.locale}/`">{{appName}}</b-navbar-brand>
    </b-navbar-brand>

    <b-navbar-toggle v-if="authenticated" target="nav-collapse"></b-navbar-toggle>

    <b-collapse v-if="authenticated" id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Local Switcher -->
        <locale-switcher />

        <b-nav-item-dropdown :text="$t('nav.account')" right>
          <b-dropdown-item @click="logout">{{$t('nav.logOut')}}</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <!-- Locale Switcher -->
    <locale-switcher v-else />
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

import LocaleSwitcher from "@/components/shared/LocalSwitcher.vue";
import { LocaleMessages } from "vue-i18n";

export default Vue.extend({
  name: "Navbar",
  components: {
    LocaleSwitcher,
  },
  methods: {
    ...mapActions(["LOGOUT"]),
    logout(): void {
      this.LOGOUT().then(() => {
        this.$router.go(0);
      });
    },
  },
  computed: {
    ...mapGetters(["authenticated"]),
    appName(): any {
      return this.$t("app.title") || process.env.VUE_APP_TITLE;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
