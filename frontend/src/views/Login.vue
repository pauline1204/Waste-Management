<template>
  <div class="login-wrapper">
    <div class="login-container floating-box">
      <h2>Login as {{ capitalizedRole }}</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Logging in...' : 'Login' }}
        </button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'user',
    },
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isLoading: false,
    };
  },
  computed: {
    capitalizedRole() {
      return this.role.charAt(0).toUpperCase() + this.role.slice(1);
    },
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      this.errorMessage = '';

      setTimeout(() => {
        const loggedInUser = this.authenticateUser(this.username, this.password);

        if (loggedInUser) {
          localStorage.setItem('user', JSON.stringify(loggedInUser));
          this.$router.push(this.getDashboardRoute(loggedInUser));
        } else {
          this.errorMessage = 'Invalid username or password. Please try again.';
        }

        this.isLoading = false;
      }, 1000);
    },
    authenticateUser(username, password) {
      const users = [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
        { id: 2, username: 'collector', password: 'collector123', role: 'collector' },
        { id: 3, username: 'user1', password: 'userpass1', role: 'user' },
        { id: 4, username: 'user2', password: 'userpass2', role: 'user' },
      ];

      return users.find(
        (user) => user.username === username && user.password === password
      ) || null;
    },
    getDashboardRoute(user) {
      switch (user.role) {
        case 'admin':
          return '/admin-dashboard';
        case 'collector':
          return '/collector-dashboard';
        case 'user':
          return `/user-dashboard/${user.id}`;
        default:
          return '/';
      }
    },
  },
};
</script>

<style scoped>
/* Wrapper for background */
.login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f3ee; /* Light beige background */
  padding: 2rem;
}

/* Main Login Container */
.login-container {
  max-width: 400px;
  padding: 2rem;
  background-color: #ffffff; /* White background for contrast */
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Floating effect shadow */
  text-align: center;
  transition: all 0.3s ease;
}

.login-container:hover {
  transform: translateY(-5px); /* Floating effect on hover */
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

/* Title Styling */
h2 {
  font-size: 1.8rem;
  color: #6a994e; /* Earth green */
  font-weight: bold;
  margin-bottom: 1.5rem;
}

/* Input Group Styles */
.input-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #6a994e; /* Earth green */
  box-shadow: 0 0 5px rgba(106, 153, 78, 0.5);
}

/* Button Styles */
button {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #6a994e, #a7c957); /* Earth green gradient */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

button:hover {
  background: linear-gradient(to right, #4CAF50, #a7c957); /* Lighter gradient */
  transform: translateY(-2px);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Error Message Styling */
.error {
  margin-top: 1rem;
  font-size: 1rem;
  color: #ff0000;
  text-align: center;
}

/* Responsive Styling */
@media (max-width: 600px) {
  .login-container {
    padding: 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}
</style>
