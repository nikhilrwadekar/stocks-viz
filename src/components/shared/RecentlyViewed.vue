<template>
  <div id="recently-viewed">
    <p v-if="userHasHistory">{{$t('home.youRecentlyViewed')}}:</p>
    <div v-else>{{$t('home.yourRecentSearchAppearance')}}</div>
    <b-button-group>
      <b-button
        variant="outline-primary"
        @click="$router.push({name: 'Graph', params: { symbol }})"
        v-for="(symbol, index) in Object.keys(history)"
        :key="index"
      >{{ symbol }}</b-button>
    </b-button-group>
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