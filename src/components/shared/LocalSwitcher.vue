<template>
  <b-nav-item-dropdown :text="$i18n.locale" right>
    <template v-slot:button-content>
      <locale-flag :locale="locale" />
    </template>
    <b-dropdown-item
      @click="updateLocale(lang)"
      v-for="(lang, index) in langs"
      :value="lang"
      :key="index"
    >
      <locale-flag :locale="lang" />
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script lang="ts">
import Vue from "vue";
import LocaleFlag from "./LocaleFlag.vue";

export default Vue.extend({
  components: {
    LocaleFlag,
  },
  methods: {
    updateLocale(locale: string) {
      this.$i18n.locale = locale;

      this.$router.push({
        params: { lang: locale },
      });
    },
  },
  computed: {
    locale(): string {
      return this.$i18n.locale;
    },
    langs() {
      return this.$i18n.availableLocales;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>