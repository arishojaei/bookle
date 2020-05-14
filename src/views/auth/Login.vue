<template>
  <div class="home">
    <div class="col-12 col-md-7 col-lg-5 mx-auto">
      <form @submit.prevent="submitLogin" class="auth-card">
        <h1 class="mb-5 opa-5">ورود کاربر</h1>

        <label for="">ایمیل</label>
        <input v-model="auth.email"
          type="email"
          class="form-control form-control-lg mb-4 mt-2">

        <label for="">پسورد</label>
        <input v-model="auth.pass"
          type="password"
          class="form-control form-control-lg mb-4 mt-2">

        <div class="d-flex justify-content-end mt-5">
          <button type="submit"
            class="btn btn-lg rounded-pill btn-success"
            :class="loading ? '' : 'px-5'"
            :disabled="loading">
            <div class="spinner-border text-light" v-if="loading" role="status"></div>
            <span v-else>ورود</span>
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Login',

  metaInfo() {
    return {
      title: 'Bookle - Login'
    }
  },

  data() {
    return {
      auth: {
        email: '',
        pass: ''
      },
      loading: false
    }
  },

  methods: {
    ...mapActions(['login']),

    submitLogin() {
      this.loading = true;
      this.login(this.auth)
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch(() => this.loading = false)
    }
  },
}
</script>
