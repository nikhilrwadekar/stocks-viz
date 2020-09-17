<template>
  <b-button-toolbar key-nav aria-label="Stock Preferences">
    <b-button-group @click="updatePreference" class="mx-1">
      <b-button
        :key="index"
        v-for="(preference, index) in preferences"
        :value="preference"
        :class="{active: currentPreference === preference}"
        :variant="currentPreference === preference ? 'primary' : null"
      >{{$t(`graph.preferences.${preference}`)}}</b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Preferences",
  data() {
    return {
      currentPreference: "open",
      preferences: ["open", "high", "low", "close", "volume"],
    };
  },
  methods: {
    updatePreference(e: any) {
      const preference: string = e.target.value;
      this.currentPreference = preference;
      this.$emit("preference", preference);
    },
  },
});
</script>