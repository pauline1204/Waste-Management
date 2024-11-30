<template>
    <div>
      <qrcode :value="userQRCode" size="200"></qrcode>
    </div>
  </template>
  
  <script>
  import { QrcodeVue } from "qrcode.vue";
  
  export default {
    name: "QRCodeDisplay",
    components: {
      QrcodeVue
    },
    data() {
      return {
        userQRCode: "User123456" // Example value, could be dynamic
      };
    }
  };
  </script>
  