<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar"
  };
  </script>
  
  <style scoped>
  nav ul {
    list-style: none;
    padding: 0;
  }
  nav li {
    display: inline;
    margin-right: 10px;
  }
  </style>
  