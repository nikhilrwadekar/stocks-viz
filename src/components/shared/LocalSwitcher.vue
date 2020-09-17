<template>
  <b-dropdown :text="$i18n.locale" right>
    <template v-slot:button-content>
      <b-img width="50" :src="`/img/flags/flag_${locale}.svg`" rounded :alt="`Flag for ${locale}`"></b-img>
      {{locale.toUpperCase()}}
    </template>
    <b-dropdown-item
      @click="updateLocale(lang)"
      v-for="(lang, index) in langs"
      :value="lang"
      :key="index"
    >
      <b-img width="50" :src="`/img/flags/flag_${lang}.svg`" rounded :alt="`Flag for ${lang}`"></b-img>
      {{lang.toUpperCase()}}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
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