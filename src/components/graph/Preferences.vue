<template>
  <b-button-toolbar key-nav aria-label="Stock Preferences">
    <b-button-group @click="updatePreference" class="mx-1">
      <b-button value="open">{{$t('graph.preferences.open')}}</b-button>
      <b-button value="high">{{$t('graph.preferences.high')}}</b-button>
      <b-button value="low">{{$t('graph.preferences.low')}}</b-button>
      <b-button value="close">{{$t('graph.preferences.close')}}</b-button>
      <b-button value="volume">{{$t('graph.preferences.volume')}}</b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Preferences",
  data() {
    return {
      preference: "open",
    };
  },
  methods: {
    updatePreference(e: any) {
      const preference = e.target.value;
      this.preference = preference;
      this.$emit("preference", preference);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>