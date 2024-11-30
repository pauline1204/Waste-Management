<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top" style="background: linear-gradient(to right, #4b7c3a, #7a9f61);">
      <div class="container">
        <a class="navbar-brand fw-bold text-light" href="#home">
          <i class="bi bi-recycle me-2"></i>EcoMasipit
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" :class="{ active: $route.hash === '#home' }">
              <router-link class="nav-link text-light" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.hash === '#about' }">
              <a class="nav-link text-light" href="#about">About</a>
            </li>
            <li class="nav-item" :class="{ active: $route.hash === '#contact' }">
              <a class="nav-link text-light" href="#contact">Contact</a>
            </li>
          </ul>
          <!-- Login Button -->
          <a href="#login" class="btn btn-outline-light ms-3">Log In</a>
        </div>
      </div>
    </nav>

    <!-- Dynamic Content -->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-dark text-light py-4 mt-auto">
      <div class="container text-center">
        <p class="mb-0">&copy; 2024 EcoMasipit | All Rights Reserved</p>
        <p class="mb-0">Follow us on 
          <a href="#" class="text-light"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-light"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-light"><i class="bi bi-instagram"></i></a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f1f1f1;
}
footer {
  background-color: #343a40;
}
</style>
