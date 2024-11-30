<template>
    <div>
      <h2>Payment History</h2>
      <ul>
        <li v-for="(payment, index) in paymentHistory" :key="index">
          {{ payment.date }} - {{ payment.amount }} PHP
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "PaymentHistory",
    data() {
      return {
        paymentHistory: [
          { date: "2024-11-01", amount: 200 },
          { date: "2024-11-05", amount: 150 },
        ]
      };
    }
  };
  </script>
  