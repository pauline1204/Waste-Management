<template>
  <div class="segregation-status-container">
    <h2>Mark Segregation Status</h2>
    
    <!-- Display default trash amount -->
    <p class="amount-info">Default Amount: <strong>{{ defaultAmount }} pesos</strong></p>
    
    <!-- Segregation status radio buttons -->
    <div class="radio-buttons">
      <label>
        <input type="radio" value="segregated" v-model="status" /> Segregated
      </label>
      <label>
        <input type="radio" value="not_segregated" v-model="status" /> Not Segregated
      </label>
    </div>
    
    <button class="save-btn" @click="saveStatus">Save Status</button>
  </div>
</template>

<script>
export default {
  name: "SegregationStatus",
  data() {
    return {
      status: "",
      defaultAmount: 40 // Default trash amount in pesos
    };
  },
  methods: {
    saveStatus() {
      console.log("Status saved: ", this.status);
      console.log("Default amount for trash: ", this.defaultAmount, "pesos");
      
      // Logic to save segregation status and amount
    }
  }
};
</script>

<style scoped>
/* Scoped Styles for SegregationStatus.vue */

/* Container for the status section */
.segregation-status-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f5f7;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

/* Amount info section */
.amount-info {
  font-size: 16px;
  color: #00796b;
  margin-bottom: 20px;
}

/* Radio button styling */
.radio-buttons {
  margin-bottom: 20px;
}

.radio-buttons label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

.radio-buttons input {
  margin-right: 10px;
}

/* Save button styling */
.save-btn {
  padding: 12px 25px;
  background-color: #00796b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.save-btn:hover {
  background-color: #004d40;
  transform: scale(1.05);
}

.save-btn:active {
  background-color: #00332b;
  transform: scale(0.98);
}
</style>
