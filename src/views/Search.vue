<template>
  <div>
    <b-form-input
      size="lg"
      v-model="symbol"
      placeholder="AAPL, MSFT, IBM etc."
      debounce="500"
      @change="GET_SEARCH_SUGGESTIONS(symbol)"
    ></b-form-input>
    <div class="mt-2">Last Search: {{ currentSearch }}</div>

    <b-list-group>
      <b-list-group-item
        @click="$router.push({
					name: 'Graph',
					params: {
						symbol: search_result['1. symbol']
					}
				})"
        v-for="(search_result, index) in currentSearchResults"
        :key="index"
      >{{search_result['1. symbol']}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "Search",
  mounted() {
    const keyword = this.$route.query.keyword || "";
    this.GET_SEARCH_SUGGESTIONS(keyword);
  },
  data() {
    return {
      symbol: this.$route.query.keyword,
    };
  },
  computed: {
    ...mapGetters(["currentSearchResults", "currentSearch", "search"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_SUGGESTIONS"]),
  },
});
</script>

<style lang="scss" scoped>
</style>