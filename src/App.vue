<template>
  <div id="app" class="container">

    <!-- Navbar -->
    <nav class="d-flex justify-content-between align-items-center py-4">
      <router-link to="/">
        <img src="./assets/img/logo.png" alt="brand_logo">
      </router-link>
      <div class="d-flex align-items-center">
        <img height="20" src="./assets/img/user_icon.svg" alt="user_icon">
        <span class="pr-2">سارا</span>
      </div>
    </nav>

    <!-- Content -->
    <router-view />

  </div>
</template>