<template>
    <div class="manage-users">
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(user.id)">Edit</button>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "ManageUsers",
    data() {
      return {
        users: [
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Doe", email: "jane@example.com" },
        ],
      };
    },
    methods: {
      editUser(id) {
        alert(`Editing user with ID ${id}`);
      },
      deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
        alert(`User with ID ${id} deleted`);
      },
    },
  };
  </script>
  
  <style scoped>
  .manage-users {
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
  
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--color-background);
  }
  
  th {
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
  }
  
  tr:hover {
    background-color: var(--color-background);
  }
  
  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:first-child {
    background-color: var(--color-secondary);
    color: white;
  }
  
  button:first-child:hover {
    background-color: var(--color-secondary-dark);
  }
  
  button:last-child {
    background-color: var(--color-error);
    color: white;
  }
  
  button:last-child:hover {
    background-color: var(--color-error-dark);
  }
  </style>
  