<template>
  <div v-if="!authenticated">
    <b-jumbotron>
      <template v-slot:header>Hello!</template>

      <template v-slot:lead>Please login to start viewing stock price history.</template>

      <hr class="my-4" />

      <b-button variant="primary" href="/login">Login</b-button>
    </b-jumbotron>
  </div>

  <div v-else>
    <b-jumbotron>
      <template v-slot:header>Hello, {{username}}!</template>

      <template v-slot:lead>Start viewing stock price history.</template>

      <hr class="my-4" />

      <!-- Top -->
      <div>You recently viewed</div>
      <b-list-group>
        <b-list-group-item
          @click="$router.push({name: 'Graph', params: { symbol }})"
          v-for="(symbol, index) in Object.keys(history)"
          :key="index"
        >{{ symbol }}</b-list-group-item>
      </b-list-group>
      <hr class="my-4" />

      <b-button variant="primary" href="/search">Go To Search</b-button>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  name: "Hero",
  computed: {
    ...mapGetters(["authenticated", "username", "history"]),
  },
});
</script>

<style scoped lang="scss">
</style>
