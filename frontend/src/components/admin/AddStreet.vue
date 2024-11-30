<template>
  <div class="add-street">
    <h1>Add New Street</h1>
    <form @submit.prevent="addStreet">
      <label for="street-name">Street Name:</label>
      <input v-model="streetName" id="street-name" type="text" required placeholder="Enter street name" />
      <button type="submit">Add Street</button>
    </form>
    
    <!-- Display added streets -->
    <div v-if="streets.length">
      <h2>Streets List</h2>
      <ul>
        <li v-for="(street, index) in streets" :key="index">{{ street }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddStreet",
  data() {
    return {
      streetName: "", // Holds the input value
      streets: [],    // Holds the list of added streets
    };
  },
  created() {
    // Load the streets from localStorage when the component is created
    const savedStreets = localStorage.getItem("streets");
    if (savedStreets) {
      this.streets = JSON.parse(savedStreets);
    }
  },
  methods: {
    addStreet() {
      if (this.streetName.trim()) {
        // Check if the street is already in the list
        if (!this.streets.includes(this.streetName.trim())) {
          this.streets.push(this.streetName.trim()); // Add new street to the list
          alert(`Street "${this.streetName}" added successfully!`);
          this.streetName = ""; // Clear the input field after adding
          this.saveStreets();    // Save the updated list to localStorage
        } else {
          alert("This street is already added.");
        }
      } else {
        alert("Please enter a valid street name.");
      }
    },
    saveStreets() {
      // Save the streets list to localStorage
      localStorage.setItem("streets", JSON.stringify(this.streets));
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
</style>
