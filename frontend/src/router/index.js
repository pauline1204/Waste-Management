import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import Dashboard from "../components/admin/Dashboard.vue";
import CollectorDashboard from "../views/CollectorDashboard.vue";
import Scanner from "../components/collector/Scanner.vue";
import UserDashboard from "../views/UserDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "generate-qr",
        name: "GenerateQR",
        component: () => import("../components/admin/GenerateQR.vue"),
      },
      {
        path: "add-street",
        name: "AddStreet",
        component: () => import("../components/admin/AddStreet.vue"),
      },
      {
        path: "manage-users",
        name: "ManageUsers",
        component: () => import("../components/admin/ManageUsers.vue"),
      },
      {
        path: "manage-qrcodes",
        name: "ManageQRCodes",
        component: () => import("../components/admin/ManageQRCodes.vue"),
      },
    ],
  },
  {
    path: "/collector-dashboard",
    name: "CollectorDashboard",
    component: CollectorDashboard,
  },
  {
    path: "/scanner",
    name: "Scanner",
    component: Scanner,
  },
  {
    path: "/user-dashboard",
    name: "UserDashboard",
    component: UserDashboard,
    children: [
      {
        path: "points-history",
        name: "PointsHistory",
        component: () => import("../components/user/PointsHistory.vue"),
      },
      {
        path: "profile-settings",
        name: "ProfileSettings",
        component: () => import("../components/user/ProfileSettings.vue"),
      },
      {
        path: "qr-code-display",
        name: "QRCodeDisplay",
        component: () => import("../components/user/QRCodeDisplay.vue"),
      },
      {
        path: "tips-guidelines",
        name: "TipsGuidelines",
        component: () => import("../components/user/TipsGuidelines.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
