<template>
    <div class="dashboard-summary">
      <h2>Dashboard Summary</h2>
      <section class="street-rankings">
        <h3>Street Rankings</h3>
        <!-- Example of displaying street rankings data -->
        <table>
          <thead>
            <tr>
              <th>Street Name</th>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(street, index) in streetRankings" :key="index">
              <td>{{ street.name }}</td>
              <td>{{ index + 1 }}</td>
              <td>{{ street.score }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- Add any other summary data you want here -->
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
    data() {
      return {
        // Example data, replace with actual data from your backend or store
        streetRankings: [
          { name: "Street 1", score: 95 },
          { name: "Street 2", score: 90 },
          { name: "Street 3", score: 85 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
.dashboard-summary {
  padding: 20px;
}

h2 {
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 20px;
}

.street-rankings {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  background-color: #f4f7fa;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

button:focus {
  outline: none;
}

button:active {
  background-color: #1abc9c;
  transform: scale(0.98);
}

button.delete {
  background-color: #e74c3c;
}

button.delete:hover {
  background-color: #c0392b;
}

button.delete:active {
  background-color: #992d22;
}

button.edit {
  background-color: #f39c12;
}

button.edit:hover {
  background-color: #e67e22;
}

button.edit:active {
  background-color: #d35400;
}

  </style>