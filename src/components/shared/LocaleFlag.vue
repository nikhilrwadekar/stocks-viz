<template>
  <span>
    <b-img width="25" :src="`/img/flags/flag_${locale}.svg`" rounded :alt="`Flag for ${locale}`"></b-img>
    {{locale.toUpperCase()}}
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LocaleFlag",
  props: ["locale"],
});
</script>