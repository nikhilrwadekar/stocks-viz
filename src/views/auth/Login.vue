<template>
  <div>
    <Form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Form from "@/components/auth/login/Form.vue";
export default Vue.extend({
  name: "Login",
  components: {
    Form,
  },
});
</script>

<style lang="scss" scoped>
</style>