<template>
  <div class="home">
    <jumbotron />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
  },
};
</script>
