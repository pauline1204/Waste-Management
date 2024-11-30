<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Menu</h2>
      <ul>
        <li @click="navigateTo('Dashboard')">Dashboard</li>
        <li @click="navigateTo('PointsHistory')">Points History</li>
        <li @click="navigateTo('QRCodeDisplay')">QR Code</li>
        <li @click="navigateTo('TipsGuidelines')">Tips and Guidelines</li>
        <li @click="navigateTo('ProfileSettings')">Profile Settings</li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="dashboard-main">
      <div class="user-dashboard">
        <h1>User Dashboard</h1>
        <div class="user-info">
          <h2>Welcome, Household {{ userId }}</h2>
          <p>Points Remaining: {{ pointsRemaining }}</p>
        </div>
        <div class="ranking">
          <h2>Your Ranking</h2>
          <p>You are currently ranked #{{ userRanking }} out of {{ totalHouseholds }} households.</p>
        </div>
        <div class="payment-history">
          <h2>Payment History</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Points Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="payment in paymentHistory" :key="payment.id">
                <td>{{ payment.date }}</td>
                <td>₱{{ payment.amount.toFixed(2) }}</td>
                <td>{{ payment.pointsEarned }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tips-guidelines">
          <h2>Tips and Guidelines</h2>
          <ul>
            <li>Separate biodegradable and non-biodegradable waste.</li>
            <li>Use reusable bags when shopping to reduce plastic waste.</li>
            <li>Compost food scraps and yard waste when possible.</li>
            <li>Recycle paper, plastic, glass, and metal items properly.</li>
            <li>Dispose of hazardous waste at designated collection points.</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserDashboard',
  data() {
    return {
      userId: '12345', // This should be dynamically set based on the logged-in user
      pointsRemaining: 250,
      userRanking: 15,
      totalHouseholds: 100,
      paymentHistory: [
        { id: 1, date: '2023-05-01', amount: 50, pointsEarned: 10 },
        { id: 2, date: '2023-04-01', amount: 50, pointsEarned: 10 },
        { id: 3, date: '2023-03-01', amount: 50, pointsEarned: 5 },
        // Add more payment history as needed
      ],
    };
  },
  methods: {
    navigateTo(page) {
      // Replace this with proper Vue Router navigation logic
      alert(`Navigating to ${page}`);
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Styling */
.sidebar {
  width: 250px;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
  padding: 20px;
}

.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease;
}

.sidebar li:hover {
  background-color: #d9d9d9;
}

/* Main Content Styling */
.dashboard-main {
  flex: 1;
  padding: 20px;
}

.user-info,
.ranking,
.payment-history,
.tips-guidelines {
  margin-bottom: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
