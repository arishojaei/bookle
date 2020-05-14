<template>
  <div id="app" class="container">

    <!-- Navbar -->
    <nav class="d-flex justify-content-between align-items-center py-4">
      <router-link to="/">
        <img height="60" src="./assets/img/logo.png" alt="brand_logo">
      </router-link>
      <div class="d-flex align-items-center" v-if="userFullName">
        <img height="20" src="./assets/img/user_icon.svg" alt="user_icon">
        <span class="pr-2">
          {{ userFullName }}
        </span>

        <button @click="handleLogout" class="text-danger bg-dark rounded-pill px-3 mr-2 border-0">
          <small>خروج</small>
        </button>
      </div>
    </nav>

    <!-- Content -->
    <router-view />

  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState(['userFullName'])
  },

  methods: {
    ...mapActions(['logout']),
    
    handleLogout() {
      this.logout()
        .then(() => this.$router.push({ path: '/login' }))
    }
  }
}
</script>