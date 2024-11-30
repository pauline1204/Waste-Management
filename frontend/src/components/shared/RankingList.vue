<template>
    <div>
      <h2>Ranking</h2>
      <ul>
        <li v-for="(rank, index) in rankingList" :key="index">
          {{ index + 1 }}. {{ rank.name }} - {{ rank.points }} points
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "RankingList",
    data() {
      return {
        rankingList: [
          { name: "Street 1, House A", points: 120 },
          { name: "Street 2, House B", points: 95 },
          { name: "Street 3, House C", points: 75 }
        ]
      };
    }
  };
  </script>
  