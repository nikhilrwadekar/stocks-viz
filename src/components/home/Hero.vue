<template>
  <div v-if="!authenticated">
    <b-jumbotron bg-variant="transparent">
      <template v-slot:header>Hello! 👋</template>

      <template v-slot:lead>Please login to start viewing stock price history.</template>

      <hr class="my-4" />

      <b-button block variant="primary" href="/login">Login</b-button>
    </b-jumbotron>
  </div>

  <div v-else>
    <b-row align-v="center" class="justify-content-md-center">
      <b-col col md="6" cols="12">
        <b-jumbotron bg-variant="transparent">
          <template v-slot:header>Hello, {{username}}! 👋</template>

          <template v-slot:lead v-if="userHasHistory">
            <div>Jump right back in!</div>
            <!-- <b-btn href="#recently-viewed">Recently Viewed</b-btn> -->
          </template>
          <template v-slot:lead v-else>Start by searching for stock price history.</template>
          <!-- <b-btn variant="primary" href="/search">Search</b-btn> -->
          <!-- <hr class="my-4" /> -->
        </b-jumbotron>
      </b-col>

      <b-col col md="6" cols="12">
        <recently-viewed />
        <b-button block class="mt-4" variant="primary" href="/search">Go To Search</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RecentlyViewed from "@/components/shared/RecentlyViewed.vue";

import { mapGetters } from "vuex";
export default Vue.extend({
  name: "Hero",
  components: {
    RecentlyViewed,
  },
  computed: {
    ...mapGetters(["authenticated", "username", "history"]),
    userHasHistory() {
      return Object.keys(this.history).length;
    },
  },
});
</script>

<style scoped lang="scss">
</style>
