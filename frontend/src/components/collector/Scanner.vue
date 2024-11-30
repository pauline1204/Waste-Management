<template>
  <div class="scanner-container">
    <h1 class="scanner-header">QR Code Scanner</h1>
    <div v-if="!scannedResult">
      <video ref="video" class="scanner-video"></video>
      <canvas ref="canvas" class="scanner-canvas"></canvas>
      <button @click="startScanner" v-if="!isScanning" class="scanner-btn">Start Scanner</button>
      <button @click="stopScanner" v-if="isScanning" class="scanner-btn">Stop Scanner</button>
    </div>
    <div v-else class="scanned-result">
      <h2 class="result-title">Scanned Result</h2>
      <p class="result-text">Household ID: {{ scannedResult }}</p>
      <p class="result-text">Default Trash Amount: <strong>{{ defaultAmount }} pesos</strong></p>
      <form @submit.prevent="submitSegregationStatus" class="segregation-form">
        <div class="radio-group">
          <input type="radio" id="segregated" value="segregated" v-model="segregationStatus" required />
          <label for="segregated" class="radio-label">Segregated</label>
        </div>
        <div class="radio-group">
          <input type="radio" id="not-segregated" value="not-segregated" v-model="segregationStatus" required />
          <label for="not-segregated" class="radio-label">Not Segregated</label>
        </div>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
      <button @click="resetScanner" class="reset-btn">Scan Another</button>
    </div>
  </div>
</template>

<script>
import jsQR from 'jsqr';

export default {
  name: 'Scanner',
  data() {
    return {
      isScanning: false,
      scannedResult: null,
      video: null,
      canvas: null,
      canvasContext: null,
      segregationStatus: null,
      defaultAmount: 40, // Default trash amount in pesos
    };
  },
  methods: {
    startScanner() {
      this.isScanning = true;
      this.video = this.$refs.video;
      this.canvas = this.$refs.canvas;
      this.canvasContext = this.canvas.getContext('2d');

      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          this.video.srcObject = stream;
          this.video.setAttribute('playsinline', true);
          this.video.play();
          requestAnimationFrame(this.tick);
        })
        .catch((err) => {
          console.error('Error accessing the camera', err);
        });
    },
    stopScanner() {
      this.isScanning = false;
      if (this.video && this.video.srcObject) {
        this.video.srcObject.getTracks().forEach((track) => track.stop());
      }
    },
    tick() {
      if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
        this.canvas.height = this.video.videoHeight;
        this.canvas.width = this.video.videoWidth;
        this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        const imageData = this.canvasContext.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });
        if (code) {
          this.scannedResult = code.data;
          this.stopScanner();
        }
      }
      if (this.isScanning) {
        requestAnimationFrame(this.tick);
      }
    },
    submitSegregationStatus() {
      // Here you would typically send this data to your backend
      console.log(`Household ID: ${this.scannedResult}, Status: ${this.segregationStatus}`);
      const points = this.segregationStatus === 'segregated' ? 10 : 5;
      console.log(`Points awarded: ${points}`);
      this.resetScanner();
    },
    resetScanner() {
      this.scannedResult = null;
      this.segregationStatus = null;
    },
  },
  beforeUnmount() {
    this.stopScanner();
  },
};
</script>

<style scoped>
/* General container styling */
.scanner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fb;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Header Styling */
.scanner-header {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* Video and canvas styling */
.scanner-video,
.scanner-canvas {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
}

/* Buttons Styling */
.scanner-btn, .submit-btn, .reset-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.scanner-btn:hover, .submit-btn:hover, .reset-btn:hover {
  background-color: #45a049;
}

/* Result section styling */
.scanned-result {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
}

/* Result text styling */
.result-text {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 10px;
}

/* Title of scanned result */
.result-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

/* Radio button group styling */
.radio-group {
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
}

.radio-label {
  margin-left: 10px;
  font-size: 1rem;
  color: #333;
}

/* Form styling */
.segregation-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* General form button styling */
button[type="submit"] {
  margin-top: 20px;
  width: 100%;
}

/* Reset scan button */
.reset-btn {
  background-color: #f44336;
}

.reset-btn:hover {
  background-color: #d32f2f;
}

</style>


