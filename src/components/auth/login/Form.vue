<template>
  <div>
    <!-- Error -->
    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{{error}}</strong>
      <button
        @click="error = null"
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- Success -->
    <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{{success}}</strong>
      <button
        @click="success = null"
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <b-form @submit.stop.prevent>
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

      <b-button
        class="mt-2 mr-sm-2 mt-sm-0"
        block
        variant="primary"
        @click="login"
      >{{$t('login.login')}}</b-button>
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
      success: null,
      error: null,
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    login() {
      const username = this.username;
      const password = this.password;
      this.LOGIN({ username, password })
        .then((message) => {
          this.success = message;
          this.$router.push({ name: "Search" });
        })
        .catch((err) => {
          this.error = err;
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

<style lang="scss" scoped>
</style>