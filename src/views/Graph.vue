<template>
  <div>{{history[$route.params.symbol]}}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "Graph",
  created() {
    const symbol = this.$route.params.symbol;
    this.GET_STOCK_HISTORY(symbol);
  },
  methods: {
    ...mapActions(["GET_STOCK_HISTORY"]),
  },
  computed: {
    ...mapGetters(["history"]),
  },
});
</script>

<style lang="scss" scoped>
</style>