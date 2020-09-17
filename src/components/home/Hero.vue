<template>
  <div v-if="!authenticated">
    <b-row align-v="center" class="justify-content-md-center">
      <b-col col md="6" cols="12">
        <b-jumbotron bg-variant="transparent">
          <template v-slot:header>{{$t('greeting')}}! 👋</template>
          <template v-slot:lead>{{$t('home.loginRequest')}}</template>

          <b-button block variant="primary" :href="`/${$i18n.locale}/login`">{{$t('login.login')}}</b-button>
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>

  <div v-else>
    <b-row align-v="center" class="justify-content-md-center">
      <b-col col md="6" cols="12">
        <b-jumbotron bg-variant="transparent">
          <template v-slot:header>{{$t('greeting')}}, {{username}}! 👋</template>
          <template v-slot:lead v-if="userHasHistory">
            <div>{{$t('home.jumpBackIn')}}!</div>
          </template>
          <template v-slot:lead v-else>{{$t('home.startBySearching')}}</template>
        </b-jumbotron>
      </b-col>

      <b-col col md="6" cols="12">
        <recently-viewed />
        <b-button
          block
          class="mt-4"
          variant="primary"
          :href="`/${$i18n.locale}/search`"
        >{{$t('search.startSearch')}}</b-button>
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
