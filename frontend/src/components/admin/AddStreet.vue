<template>
  <div class="add-street">
    <h1>Add New Street</h1>
    <form @submit.prevent="addStreet">
      <label for="street-name">Street Name:</label>
      <input 
        v-model="streetName" 
        id="street-name" 
        type="text" 
        required 
        placeholder="Enter street name" 
      />
      <button type="submit">Save Street</button>
    </form>

    <!-- Display added streets -->
    <div v-if="streets.length">
      <h2>Streets List</h2>
      <ul>
        <li v-for="(street, index) in streets" :key="index">{{ street }}</li>
      </ul>
    </div>
    <div v-else>
      <p>No streets added yet.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddStreet",
  data() {
    return {
      streetName: "", // Holds the input value
      streets: [],    // Holds the list of added streets
    };
  },
  created() {
    this.fetchStreets(); // Load the streets from the backend when the component is created
  },
  methods: {
    // Method to add a new street
    async addStreet() {
      const trimmedName = this.streetName.trim();
      if (!trimmedName) {
        alert("Please enter a valid street name."); // Prevent empty submissions
        return;
      }

      try {
        console.log('Adding street:', trimmedName); // Debugging log
        const response = await axios.post('http://localhost:3000/streets', {
          name: trimmedName,
        });

        if (response.status === 201) {
          alert(`Street "${trimmedName}" added successfully!`);
          this.streetName = ""; // Clear the input field
          this.fetchStreets();  // Refresh the list of streets from the backend
        }
      } catch (error) {
        console.error('Error adding street:', error.response?.data || error.message); // Debug error details
        alert("Error adding street: " + (error.response?.data || error.message));
      }
    },

    // Method to fetch the list of streets from the backend
    async fetchStreets() {
      try {
        console.log('Fetching streets from server...');
        const response = await axios.get('http://localhost:3000/streets');
        
        // Check if response data is valid
        if (Array.isArray(response.data)) {
          this.streets = response.data;
        } else {
          console.error('Unexpected response data:', response.data);
          alert("Error: Unexpected data format.");
        }

        console.log('Fetched streets:', this.streets);
      } catch (error) {
        console.error('Error fetching streets:', error.response?.data || error.message);
        alert("Error fetching streets: " + (error.response?.data || error.message));
      }
    },
  },
};
</script>

<style scoped>
.add-street {
  background-color: var(--color-surface);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  padding: 2rem;
  margin-top: 2rem;
}

h1 {
  color: var(--color-primary);
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

form {
  display: grid;
  gap: 1rem;
}

label {
  font-weight: 600;
  color: var(--color-text);
}

input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-text-light);
  border-radius: 4px;
  font-size: 1rem;
}

input[type="text"]:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
}

button[type="submit"] {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;
}

button[type="submit"]:hover {
  background-color: var(--color-primary-dark);
}

ul {
  padding: 0;
  list-style-type: none;
  margin-top: 1rem;
}

li {
  padding: 0.5rem 0;
  background-color: var(--color-background-light);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 1rem;
  color: var(--color-text-light);
  font-style: italic;
}
</style>
