<template>
  <div>
    <h1>
      {{$t('search.searchFor')}}
      <strong>{{$t('company')}}</strong>
      {{$t('symbols')}}
    </h1>
    <b-form-input
      size="lg"
      v-model="symbol"
      :placeholder="$t('search.startTypingSuggestion')"
      @input="debouncedMethod"
    ></b-form-input>

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