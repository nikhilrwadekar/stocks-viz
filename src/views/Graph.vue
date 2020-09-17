<template>
  <div>
    <h1>
      {{$t('graph.stockHistoryGraph')}} {{$t('for')}}
      <strong>{{symbol}}</strong>
    </h1>
    <p>
      {{$t('graph.currentlyViewing')}}:
      <strong>{{$t(`graph.preferences.${preference}`)}}</strong>
    </p>

    <div class="d-flex flex-row justify-content-center">
      <Preferences @preference="changePreference" />
    </div>

    <div class="my-4">
      <area-chart
        :xtitle="$t('time')"
        :ytitle="$t('value')"
        :data="mapChartData(preference)"
        :colors="['rgba(29,38,117,0.75)']"
      ></area-chart>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MapData } from "@/types/interfaces/MapData";
import {
  CompanyStock,
  DailyStockPrice,
} from "@/types/interfaces/DailyStockPrice";
import { mapActions, mapGetters } from "vuex";
import Preferences from "@/components/graph/Preferences.vue";

export default Vue.extend({
  name: "Graph",
  created() {
    const symbol = this.symbol;
    this.loading = true;
    this.GET_STOCK_HISTORY(symbol)
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.$router.push(`/${this.$i18n.locale}/search`);
      });
  },
  components: {
    Preferences,
  },
  data() {
    return {
      loading: false,
      preference: "open",
    };
  },
  methods: {
    ...mapActions(["GET_STOCK_HISTORY"]),
    changePreference(preference: string) {
      this.preference = preference;
    },
    mapChartData(type: string) {
      let key = "open";
      switch (type) {
        case "open":
          key = "1. open";
          break;
        case "high":
          key = "2. high";
          break;
        case "low":
          key = "3. low";
          break;
        case "close":
          key = "4. close";
          break;
        case "volume":
          key = "5. volume";
          break;
        default:
          key = "1. open";
          break;
      }

      const stockHistory: CompanyStock = this.currentHistory;
      const mapData: MapData = {};

      Object.keys(stockHistory).map((date) => {
        const stockHistoryOnADate: DailyStockPrice = stockHistory[date];
        mapData[date] = stockHistoryOnADate[key].toString();
      });
      return mapData;
    },
  },
  computed: {
    ...mapGetters(["history"]),
    symbol(): string {
      return this.$route.params.symbol;
    },
    currentHistory(): CompanyStock {
      const symbol: string = this.symbol;
      return this.history[symbol] || {};
    },
  },
});
</script>