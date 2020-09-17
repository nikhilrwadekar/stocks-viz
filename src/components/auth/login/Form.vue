<template>
  <div>
    <!-- Error -->
    <b-alert @dismissed="error = null" :show="error" dismissible variant="danger">
      <strong>{{$t('login.error')}}</strong>
    </b-alert>

    <!-- Success -->
    <b-alert @dismissed="success = null" :show="success" dismissible variant="success">
      <strong>{{$t('login.success')}}</strong>
    </b-alert>

    <b-form @submit.stop.prevent @keyup.enter="login">
      <label for="text-username">{{$t('login.username')}}</label>
      <b-input
        v-model="username"
        id="text-username"
        aria-describedby="username-help-block"
        :value="username"
      ></b-input>
      <b-form-invalid-feedback :state="validation">{{$t('login.validation.bad')}}</b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">{{$t('login.validation.good')}}</b-form-valid-feedback>

      <label for="text-password">{{$t('login.password')}}</label>
      <b-input
        v-model="password"
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-input>

      <b-button class="mt-2" block variant="primary" @click="login">{{$t('login.login')}}</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  name: "Form",
  data() {
    return {
      username: "mcapuser",
      password: "password",
      success: false,
      error: false,
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    login() {
      const username = this.username;
      const password = this.password;
      this.LOGIN({ username, password })
        .then(() => {
          this.success = true;
          this.$router.push({ name: "Search" });
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
  computed: {
    validation(): boolean {
      return this.username.length > 4 && this.password.length < 13;
    },
  },
});
</script>