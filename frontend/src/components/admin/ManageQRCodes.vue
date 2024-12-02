<!-- okayy na too haaa -->

<template>
  <div class="manage-qr-codes">
    <h1>Manage QR Codes</h1>
    <table>
      <thead>
        <tr>
          <th>Street</th>
          <th>QR Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="code in qrCodes" :key="code.id">
          <td>{{ code.street }}</td>
          <td>
            <img v-if="code.qrCode" :src="code.qrCode" alt="QR Code" class="qr-code-img" />
            <span v-else>No QR Code Available</span>
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
import axios from "axios";

export default {
  name: "ManageQRCodes",
  data() {
    return {
      qrCodes: [], // Store the QR codes fetched from the backend
    };
  },
  created() {
    this.fetchQRCodes(); // Fetch the QR codes when the component is created
  },
  methods: {
    async fetchQRCodes() {
      try {
        // Fetch QR codes from the backend API
        const response = await axios.get("http://localhost:3000/qr-codes");
        if (Array.isArray(response.data)) {
          this.qrCodes = response.data; // Assign fetched data to `qrCodes`
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching QR codes:", error);
        alert("Failed to fetch QR codes.");
      }
    },
    async deleteQRCode(id) {
      try {
        // Delete the QR code from the backend
        const response = await axios.delete(`http://localhost:3000/qr-codes/${id}`);
        if (response.status === 200) {
          // Remove the deleted QR code from the local array
          this.qrCodes = this.qrCodes.filter((code) => code.id !== id);
          alert("QR Code deleted successfully.");
        } else {
          alert("Failed to delete QR Code.");
        }
      } catch (error) {
        console.error("Error deleting QR Code:", error);
        alert("Failed to delete QR Code.");
      }
    }
  },
};
</script>
<style scoped>
.manage-qr-codes {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 800px;
  margin: 20px auto;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

button {
  padding: 8px 16px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c2185b;
}

.qr-code-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
