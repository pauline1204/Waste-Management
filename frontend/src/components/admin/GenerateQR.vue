<template>
  <div class="generate-qr">
    <h1>Generate QR Code</h1>

    <!-- Form to select a street and generate QR code -->
    <form @submit.prevent="generateQRCode">
      <label for="street">Select Street:</label>
      <select v-model="selectedStreet" id="street" required>
        <option value="" disabled>Select a street</option>
        <option v-for="(street, index) in streets" :key="index" :value="street">
          {{ street }}
        </option>
      </select>
      <button type="submit" :disabled="!selectedStreet">Generate QR Code</button>
    </form>

    <!-- Display the generated QR Code -->
    <div v-if="qrCodeData" class="qr-code-container">
      <h2>Generated QR Code:</h2>
      <img :src="qrCodeData" alt="QR Code" />
      <button @click="downloadQRCode">Download QR Code</button>
    </div>

    <!-- Display the list of streets -->
    <div v-if="streets.length">
      <h2>Streets List</h2>
      <table>
        <thead>
          <tr>
            <th>Street Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(street, index) in streets" :key="index">
            <td>{{ street }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcode";
import axios from "axios";

export default {
  name: "GenerateQR",
  data() {
    return {
      selectedStreet: "", // Street selected by the admin
      streets: [],        // List of streets from the backend
      qrCodeData: null,   // Base64-encoded QR code image
    };
  },
  created() {
    this.fetchStreets(); // Load the streets from the backend when the component is created
  },
  methods: {
    // Generate the QR code and save it to the database
    async generateQRCode() {
      try {
        if (this.selectedStreet) {
          // Generate the QR Code data URL
          const streetUrl = `http://localhost:5173/street?name=${this.selectedStreet}`;
          this.qrCodeData = await QRCode.toDataURL(streetUrl, {
            width: 200,
            margin: 2,
          });

          // Save the street name and QR code to the database via backend
          await axios.post("http://localhost:3000/qr-codes", {
            street: this.selectedStreet,
            qrCode: this.qrCodeData,
          });

          alert("QR Code generated and saved successfully!");
        }
      } catch (error) {
        console.error("Error generating QR Code:", error);
        alert("Failed to generate QR Code.");
      }
    },

    // Fetch streets from the database
    async fetchStreets() {
      try {
        const response = await axios.get("http://localhost:3000/streets");
        if (Array.isArray(response.data)) {
          this.streets = response.data; // Set the fetched streets to the component's data
        } else {
          console.error("Invalid response format", response);
          alert("Failed to fetch streets.");
        }
      } catch (error) {
        console.error("Error fetching streets:", error);
        alert("Failed to fetch streets.");
      }
    },

    // Download the generated QR Code as an image file
    downloadQRCode() {
      const link = document.createElement("a");
      link.href = this.qrCodeData;
      link.download = `${this.selectedStreet}-qr-code.png`; // Ensure proper file extension
      link.click();
    },
  },
};
</script>
<style scoped>
.generate-qr {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

button {
  padding: 10px;
  font-size: 16px;
  background: #00796b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #004d40;
}

.qr-code-container {
  margin-top: 20px;
  text-align: center;
}

.qr-code-container img {
  margin: 10px 0;
  width: 200px;
  height: 200px;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f1f1f1;
}
</style>
