<template>
  <div class="generate-qr">
    <h1>Generate QR Code</h1>
    <form @submit.prevent="generateQRCode">
      <label for="inputData">Enter Household ID:</label>
      <input
        type="text"
        id="inputData"
        v-model="inputData"
        placeholder="Enter household ID for QR code"
        required
      />
      <button type="submit">Generate QR Code</button>
    </form>

    <!-- Display QR Code -->
    <div v-if="qrCodeData" class="qr-code-container">
      <h2>Generated QR Code:</h2>
      <img :src="qrCodeData" alt="QR Code" />
      <button @click="downloadQRCode">Download QR Code</button>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  name: "GenerateQR",
  data() {
    return {
      inputData: "", // Household ID to encode
      qrCodeData: null, // Base64-encoded QR code image
    };
  },
  methods: {
    async generateQRCode() {
      try {
        if (this.inputData) {
          const householdUrl = `http://localhost:5173/login?role=collector&householdId=${this.inputData}`;
          
          // Generate QR Code as a Base64 image
          this.qrCodeData = await QRCode.toDataURL(householdUrl, {
            width: 200,
            margin: 2,
          });

          // Store the QR code in localStorage
          const qrCodes = JSON.parse(localStorage.getItem("qrCodes")) || [];
          qrCodes.push({ id: Date.now(), householdId: this.inputData, qrUrl: this.qrCodeData });
          localStorage.setItem("qrCodes", JSON.stringify(qrCodes));
        }
      } catch (error) {
        console.error("Error generating QR Code:", error);
      }
    },
    downloadQRCode() {
      const link = document.createElement("a");
      link.href = this.qrCodeData;
      link.download = "qr-code.png";
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

input[type="text"] {
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
</style>
