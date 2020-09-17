<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <h1>{{$t('login.login')}}</h1>
        <Form />
      </b-col>
    </b-row>
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