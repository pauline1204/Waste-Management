<template>
    <div>
      <h1>Profile Settings</h1>
      <form @submit.prevent="saveProfile">
        <label for="username">Username:</label>
        <input v-model="username" id="username" type="text" />
        
        <label for="email">Email:</label>
        <input v-model="email" id="email" type="email" />
        
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileSettings',
    data() {
      return {
        username: '',
        email: ''
      };
    },
    methods: {
      saveProfile() {
        // Logic to save profile settings
        alert(`Profile saved! Username: ${this.username}, Email: ${this.email}`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles for ProfileSettings component here */
  </style>
  