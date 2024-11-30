<script>
export default {
  props: {
    role: {
      type: String,
      default: 'user', // Default role to 'user'
    },
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      // Simulated authentication
      const loggedInUser = this.authenticateUser(this.username, this.password);

      if (loggedInUser) {
        // Save the user in localStorage for testing
        localStorage.setItem('user', JSON.stringify(loggedInUser));

        // Redirect based on role
        if (loggedInUser.role === 'admin') {
          this.$router.push('/admin-dashboard');
        } else if (loggedInUser.role === 'collector') {
          this.$router.push('/collector-dashboard');
        } else if (loggedInUser.role === 'user') {
          this.$router.push(`/user-dashboard/${loggedInUser.id}`);
        }
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    },
    authenticateUser(username, password) {
      // Temporary hardcoded accounts for testing
      const accounts = [
        { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
        { id: 2, username: 'collector', password: 'collector123', role: 'collector' },
        { id: 3, username: 'user1', password: 'userpass1', role: 'user' },
      ];

      // Find matching account
      return accounts.find(account => account.username === username && account.password === password) || null;
    },
  },
};
</script>


<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #6DBE45;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #A8DAB5;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
