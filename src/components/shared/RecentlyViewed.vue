<template>
  <div id="recently-viewed">
    <h3 v-if="userHasHistory">You recently viewed</h3>
    <div v-else>
      Your recent search history will appear here.
      <hr class="my-4" />
    </div>
    <b-list-group>
      <b-list-group-item
        variant="secondary"
        @click="$router.push({name: 'Graph', params: { symbol }})"
        v-for="(symbol, index) in Object.keys(history)"
        :key="index"
      >{{ symbol }}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "RecentlyViewed",
  computed: {
    ...mapGetters(["history"]),
    userHasHistory() {
      return Object.keys(this.history).length;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>