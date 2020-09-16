<template>
  <div>
    <h1>
      Search for
      <strong>company</strong> symbols
    </h1>
    <b-form-input
      size="lg"
      v-model="symbol"
      placeholder="Start typing for suggestions..."
      @input="debouncedMethod"
    ></b-form-input>
    <!-- @change="GET_SEARCH_SUGGESTIONS(symbol.toUpperCase())" -->

    <!-- <recently-viewed /> -->

    <!-- <h2 v-if="currentSearch" class="mt-2">Search Results for your latest search: {{ currentSearch }}</h2>
    <h2 v-else>Start searching for stock prices above</h2>-->

    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        @click="$router.push({
					name: 'Graph',
					params: {
						symbol: search_result['1. symbol']
					}
				})"
        v-for="(search_result, index) in currentSearchResults"
        :key="index"
      >
        {{search_result['2. name']}}
        <b-badge variant="primary" pill>{{search_result['1. symbol']}}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

import _ from "lodash";

export default Vue.extend({
  name: "Search",
  components: {
    // RecentlyViewed,
  },
  mounted() {
    const keyword = this.$route.query.keyword;

    if (keyword) this.GET_SEARCH_SUGGESTIONS(keyword);
  },
  data() {
    return {
      symbol: this.$route.query.keyword || "",
    };
  },
  watch: {
    symbol: "debouncedSuggestions",
  },
  computed: {
    ...mapGetters(["currentSearchResults", "currentSearch", "search"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_SUGGESTIONS"]),
    debouncedMethod: _.debounce(function (value: string) {
      this.GET_SEARCH_SUGGESTIONS(value);
    }, 500),
  },
});
</script>

<style lang="scss" scoped>
</style>