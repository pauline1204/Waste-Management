<template>
  <div class="points-history">
    <h2>Points History</h2>
    <ul v-if="pointsHistory.length">
      <li v-for="(entry, index) in pointsHistory" :key="index">
        <strong>{{ entry.date }}</strong>: {{ entry.points }} points
      </li>
    </ul>
    <p v-else>No points history available.</p>
  </div>
</template>

<script>
export default {
  name: "PointsHistory",
  data() {
    return {
      pointsHistory: [
        { date: "2024-11-01", points: 10 },
        { date: "2024-11-05", points: 20 },
        { date: "2024-11-10", points: 30 },
      ],
    };
  },
};
</script>

<style scoped>
.points-history {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
  font-size: 16px;
}
</style>
