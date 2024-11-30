<template>
  <div class="manage-qr-codes">
    <h1>Manage QR Codes</h1>
    <table>
      <thead>
        <tr>
          <th>Household ID</th>
          <th>QR Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="code in qrCodes" :key="code.id">
          <td>{{ code.householdId }}</td>
          <td>
            <img :src="code.qrUrl" alt="QR Code" />
          </td>
          <td>
            <button @click="deleteQRCode(code.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ManageQRCodes",
  data() {
    return {
      qrCodes: [], // To store the list of QR codes
    };
  },
  created() {
    // Fetch QR codes from localStorage when the component is created
    const qrCodes = JSON.parse(localStorage.getItem("qrCodes")) || [];
    this.qrCodes = qrCodes;
  },
  methods: {
    deleteQRCode(id) {
      // Delete the QR code from the list and update localStorage
      this.qrCodes = this.qrCodes.filter((code) => code.id !== id);
      localStorage.setItem("qrCodes", JSON.stringify(this.qrCodes));
      alert(`QR Code with ID ${id} deleted`);
    },
  },
};
</script>


  <style scoped>
  .manage-qr-codes {
    background-color: var(--color-surface);
    border-radius: 8px;
    box-shadow: var(--shadow-md);
    padding: 2rem;
    margin-top: 2rem;
  }
  
  h1 {
    color: var(--color-primary);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--color-background);
  }
  
  th {
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
  }
  
  tr:hover {
    background-color: var(--color-background);
  }
  
  img {
    max-width: 100px;
    height: auto;
    border: 1px solid var(--color-background);
    border-radius: 4px;
  }
  
  button {
    background-color: var(--color-error);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: var(--color-error-dark);
  }
  </style>
  