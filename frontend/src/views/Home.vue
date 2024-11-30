<template>
  <section class="flex items-center justify-center min-vh-100 bg-light">
    <div class="floating-box text-center space-y-10 max-w-md w-full bg-white shadow rounded p-5">
      <!-- Title Section -->
      <div>
        <h1 class="display-5 fw-bold text-success">Welcome to EcoMasipit</h1>
        <p class="lead text-muted mt-3">
          Select your role below to get started and contribute to our eco-friendly community.
        </p>
      </div>

      <!-- Role Selection Cards -->
      <div class="row g-4">
        <!-- Admin Card -->
        <div 
          @click="selectRole('admin')" 
          class="role-card text-white border-0 shadow-sm p-4 rounded cursor-pointer d-flex align-items-center justify-content-center" 
          style="background: linear-gradient(to right, #6a994e, #a7c957);"
        >
          <span class="fs-5 fw-bold">Admin</span>
        </div>

        <!-- Collector Card -->
        <div 
          @click="selectRole('collector')" 
          class="role-card text-white border-0 shadow-sm p-4 rounded cursor-pointer d-flex align-items-center justify-content-center" 
          style="background: linear-gradient(to right, #bc986a, #e9c46a);"
        >
          <span class="fs-5 fw-bold">Collector</span>
        </div>

        <!-- User Card -->
        <div 
          @click="selectRole('user')" 
          class="role-card text-white border-0 shadow-sm p-4 rounded cursor-pointer d-flex align-items-center justify-content-center" 
          style="background: linear-gradient(to right, #264653, #2a9d8f);"
        >
          <span class="fs-5 fw-bold">User</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    selectRole(role) {
      this.$router.push({ name: "Login", query: { role } });
    },
  },
};
</script>

<style scoped>
/* Floating Container */
.floating-box {
  margin-top: 5rem; /* Adds space from the header */
  margin-bottom: 5rem; /* Adds space from the footer */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow for floating effect */
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
}

/* Section Background */
section {
  padding-top: 2rem; /* Adds padding from the top */
  padding-bottom: 2rem; /* Adds padding from the bottom */
  background-color: #f4f3ee; /* Light beige background for softness */
  min-height: calc(100vh - 100px); /* Ensures proper spacing with header and footer */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Typography */
h1 {
  font-size: 2.5rem;
  color: #6a994e; /* Earth green */
}

p {
  font-size: 1rem;
  color: #6c757d;
}

/* Role Card */
.role-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-size: 1.125rem;
}

.role-card span {
  color: #fff !important; /* Ensures text color is white and overrides conflicting styles */
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8); /* Adds contrast for readability */
}

.role-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Padding */
.role-card {
  padding: 1.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 0.9rem;
  }
  .role-card {
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>
