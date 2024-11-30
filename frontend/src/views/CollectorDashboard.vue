<template>
  <div class="container mt-5">
    <!-- Dashboard Header -->
    <div class="text-center mb-4">
      <h1>Collector Dashboard</h1>
      <p class="lead">This is the Collector Dashboard page.</p>
    </div>

    <!-- Button Section -->
    <div class="d-flex justify-content-center">
      <button @click="goToScanner" class="btn btn-success btn-lg">
        Open Scanner
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectorDashboard',
  methods: {
    goToScanner() {
      // Programmatically navigate to the Scanner page
      this.$router.push("/scanner");
    },
  },
};
</script>

<style scoped>
/* Additional styling (optional) */
</style>
