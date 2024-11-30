<template>
  <div class="admin-dashboard">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1>Admin Panel</h1>
      </div>
      <nav>
        <ul>
          <li><router-link to="/admin-dashboard" exact>
            <i class="fas fa-home"></i>Home
          </router-link></li>
          <li><router-link to="/admin-dashboard/generate-qr">
            <i class="fas fa-qrcode"></i>Generate QR
          </router-link></li>
          <li><router-link to="/admin-dashboard/add-street">
            <i class="fas fa-road"></i>Add Street
          </router-link></li>
          <li><router-link to="/admin-dashboard/manage-users">
            <i class="fas fa-users"></i>Manage Users
          </router-link></li>
          <li><router-link to="/admin-dashboard/manage-qrcodes">
            <i class="fas fa-qrcode"></i>Manage QR Codes
          </router-link></li>
        </ul>
      </nav>
    </aside>

    <main class="content">
      <header class="content-header">
        <h2>Welcome to the Admin Dashboard</h2>
        <div class="user-info">
          <span>Admin User</span>
          <img src="https://via.placeholder.com/40" alt="Admin Avatar" class="avatar">
        </div>
      </header>
      <div class="content-body">
        <router-view></router-view> <!-- This will render the child route (Dashboard, etc.) -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #A8DAB5, #6DBE45); /* Fresh green gradient */
  color: #34495e; /* Soft dark text for better readability */
  display: flex;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center; /* Centering content */
  padding: 0 20px; /* Adding a little padding for better spacing on smaller screens */
  background-size: 200% 200%; /* Smooth gradient effect */
  animation: gradientAnimation 6s ease infinite; /* Animated gradient for added motion */
}

/* Smooth gradient animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Adding a subtle drop shadow to the entire page */
body {
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1); /* Light shadow for a soft, floating effect */
}

/* Enhanced link styling for better user interaction */
a {
  color: #27ae60; /* A fresh green color */
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

a:hover, a:focus {
  color: #2d3e50; /* Darker text on hover */
  transform: scale(1.1); /* Slight zoom effect on hover for interactivity */
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Adding a subtle animation effect for the entire page */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

body {
  animation: fadeIn 1s ease-out;
}

.admin-dashboard {
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: #f7f9f9; /* Light background color for contrast */
  padding: 20px; /* Adding some padding for spacing */
  flex-direction: row; /* Layout in row direction for large screens */
  align-items: flex-start; /* Align items to the top */
  justify-content: flex-start; /* Align both sidebar and content to the left */
  transition: all 0.3s ease; /* Smooth transition for changes like sidebar toggle */
}

.admin-dashboard .sidebar {
  background-color: var(--color-white);
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1); /* Shadow effect for sidebar */
  transition: transform 0.3s ease; /* Smooth transition for sidebar collapse/expand */
  z-index: 10;
  width: 250px; /* Set fixed width for sidebar */
  height: 100%; /* Full height */
}

.admin-dashboard .content {
  background-color: var(--color-white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for content area */
  padding: 20px;
  border-radius: 10px; /* Rounded corners for modern look */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-grow: 1;
  height: 100%; /* Ensure content takes full height */
}

/* Adding a subtle hover effect for content */
.admin-dashboard .content:hover {
  transform: translateY(-5px); /* Slight lift on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

/* Responsive for medium-sized screens */
@media (max-width: 1024px) {
  .admin-dashboard {
    flex-direction: row; /* Maintain row layout */
  }
  .admin-dashboard .sidebar {
    width: 200px; /* Slightly smaller sidebar on medium screens */
  }
  .admin-dashboard .content {
    margin-left: 20px; /* Provide some space between sidebar and content */
  }
}

/* Responsive for smaller screens (tablets and below) */
@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column; /* Stack elements for better mobile experience */
  }
  .admin-dashboard .sidebar {
    width: 100%; /* Sidebar takes full width on small screens */
    height: auto;
    box-shadow: none; /* Remove shadow on small screens */
    border-bottom: 2px solid var(--color-border); /* Border at the bottom for separation */
  }
  .admin-dashboard .content {
    margin-top: 15px; /* Provide spacing between content and collapsed sidebar */
    padding: 15px; /* Adjust padding for smaller screens */
  }
}

@media (max-width: 480px) {
  .admin-dashboard .sidebar {
    display: none; /* Hide sidebar on very small screens for cleaner look */
  }
  .admin-dashboard .content {
    margin-top: 0;
    padding: 15px; /* Ensure content remains readable with proper padding */
  }
}

/* Add animation for content loading */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.admin-dashboard .content {
  animation: fadeIn 0.5s ease-out;
}


.sidebar {
  width: 250px;
  background-color: #ffffff; /* Clean white background for minimalist effect */
  color: #34495e; /* Darker text for contrast */
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-right: 2px solid #ecf0f1; /* Subtle right border for clean separation */
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #ecf0f1; /* Light border for separation */
  text-align: center;
  margin-bottom: 20px;
}

.sidebar-header h1 {
  font-size: 28px;
  font-weight: 600;
  color: #27ae60; /* Bright green for eco-friendly vibe */
  letter-spacing: 1px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

nav ul li {
  margin-bottom: 15px;
}

nav ul li a {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #34495e;
  text-decoration: none;
  border-left: 4px solid transparent;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  background-color: #f7f9f9; /* Light hover effect for subtle interaction */
  border-left-color: #27ae60; /* Green border on hover */
  color: #2d3e50; /* Slightly darker text color on hover for readability */
}

nav ul li a i {
  margin-right: 15px;
  font-size: 20px;
  color: #27ae60; /* Green icons for eco-friendly consistency */
  transition: transform 0.3s ease;
}

nav ul li a:hover i {
  transform: scale(1.1); /* Subtle icon grow effect on hover */
}

/* Content Area */
.content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white); /* Ensure content area has a clean background */
  border-radius: 8px; /* Smooth corners for a modern look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Light shadow for content */
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Content Header */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.content-header h2 {
  font-size: 30px;
  color: #2c3e50;
  font-weight: 600;
  margin: 0; /* Remove default margin */
}

/* Responsive Design for Tablets and Smaller Screens */
@media (max-width: 1024px) {
  .sidebar {
    width: 220px; /* Ensure sidebar remains responsive */
  }

  .content-header h2 {
    font-size: 26px; /* Adjust font size for header */
  }

  nav ul li a {
    font-size: 16px; /* Adjust link font size */
  }

  .content {
    padding: 15px; /* Slightly reduce padding on smaller screens */
  }

  .content-header {
    flex-direction: column; /* Stack content header items vertically */
    align-items: flex-start; /* Align header items to the left */
  }

  .content-header h2 {
    font-size: 24px; /* Reduce header font size for small screens */
  }
}

/* Responsive Design for Small Devices (Phones) */
@media (max-width: 480px) {
  .content-header h2 {
    font-size: 22px; /* Further reduce font size */
  }

  .content {
    padding: 10px; /* Less padding for more space */
  }
}


@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column;
    overflow: auto;
  }

  .sidebar {
    width: 100%;
    height: auto;
    padding: 15px 0;
    box-shadow: none;
    position: relative;
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    padding: 10px;
    text-align: center;
  }

  nav ul li a i {
    margin-bottom: 5px;
  }

  .content {
    padding: 15px;
  }

  .content-header h2 {
    font-size: 26px;
  }

  .user-info {
    margin-top: 10px;
  }

  .avatar {
    width: 35px;
    height: 35px;
  }
}

/* Mobile-first Responsive Styles */
@media (max-width: 480px) {
  .sidebar {
    display: none; /* Hide sidebar on small screens for better space utilization */
  }

  .admin-dashboard {
    flex-direction: column; /* Stack content vertically */
    padding: 20px; /* Add padding for spacing */
  }

  .content-header h2 {
    font-size: 24px; /* Adjust heading font size */
    color: #2c3e50; /* Darker color for better contrast */
    font-weight: 600;
  }

  .content-body {
    background-color: #ffffff;
    border-radius: 12px; /* Rounded corners for smoother look */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 20px; /* Add margin for spacing */
  }
}

/* User Info Styling */
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Spacing below the user info */
}

.user-info span {
  font-weight: 500;
  color: #34495e;
  margin-right: 12px;
  font-size: 16px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.avatar:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); /* Add shadow effect */
}

/* General Content Styling */
.content-body {
  background-color: #ffffff;
  border-radius: 12px; /* Smooth corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
  padding: 25px;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 20px;
}

/* Responsive Styling for Medium Screens (Tablets) */
@media (max-width: 1024px) {
  .sidebar {
    width: 250px; /* Adjust sidebar width */
  }

  nav ul li a {
    font-size: 16px; /* Smaller font size for navigation */
    padding: 12px 16px; /* Add some padding */
  }

  .content-header h2 {
    font-size: 28px;
  }
}

/* Responsive Styling for Smaller Tablets and Laptops */
@media (max-width: 768px) {
  .admin-dashboard {
    flex-direction: column; /* Stack layout on smaller screens */
    overflow: auto;
  }

  .sidebar {
    width: 100%; /* Sidebar takes full width */
    height: auto;
    padding: 15px 0;
    box-shadow: none; /* Remove shadow on small screens */
    position: relative;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    padding: 10px;
    text-align: center;
  }

  nav ul li a i {
    margin-bottom: 5px;
  }

  .content {
    padding: 15px;
  }

  .content-header h2 {
    font-size: 26px; /* Adjust font size */
  }

  .user-info {
    margin-top: 10px;
  }

  .avatar {
    width: 40px; /* Slightly smaller avatar */
    height: 40px;
  }
}
</style>