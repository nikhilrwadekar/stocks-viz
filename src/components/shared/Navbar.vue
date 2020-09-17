<template>
  <b-navbar
    fixed
    toggleable="md"
    class="justify-content-space-between mb-5"
    type="dark"
    variant="primary"
  >
    <b-navbar-brand :href="`/${$i18n.locale}/`">{{appName}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Local Switcher -->
        <locale-switcher />
        <b-nav-item v-if="authenticated" @click="logout">{{$t('nav.logOut')}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
    appName(): LocaleMessages | string {
      return process.env.VUE_APP_TITLE || this.$t("app.title");
    },
  },
});
</script>