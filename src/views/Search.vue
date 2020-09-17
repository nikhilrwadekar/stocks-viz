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
      :placeholder="currentSearchResults && currentSearchResults.length ? $t('search.startTypingAgainSuggestion') : $t('search.startTypingSuggestion')"
      @input="debounceSuggestionInput;loading = true;"
    ></b-form-input>

    <b-list-group>
      <b-skeleton-table
        v-if="loading"
        :rows="5"
        :columns="1"
        :table-props="{ bordered: true, striped: true }"
      ></b-skeleton-table>

      <b-list-group-item
        v-else
        :variant="index % 2 === 0 ? 'secondary' : null"
        class="d-flex justify-content-between align-items-center"
        :href="`/${$i18n.locale}/graph/${search_result['1. symbol']}`"
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
import { debounce } from "lodash";
import { mapActions, mapGetters } from "vuex";

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
      loading: false,
    };
  },
  watch: {
    symbol: "debounceSuggestionInput",
  },
  computed: {
    ...mapGetters(["currentSearchResults", "currentSearch", "search"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH_SUGGESTIONS"]),
    debounceSuggestionInput: debounce(function (this: any, value: string) {
      this.GET_SEARCH_SUGGESTIONS(value).then(() => {
        this.loading = false;
      });
    }, 500),
  },
});
</script>

<style lang="scss" scoped>
</style>