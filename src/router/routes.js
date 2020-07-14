
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue") },
      {
        path: "/random",
        name: "PageRandomFact",
        component: () => import("pages/RandomFact.vue")
      },
      { path: "/about", component: () => import("pages/About.vue") },
      {
        path: "/about/accessibility",
        component: () => import("pages/about/Accessibility.vue")
      },
      { path: "/about/help", component: () => import("pages/about/Help.vue") },
      { path: "/auth", component: () => import("pages/Auth.vue") },
      {
        path: "/admin/dashboard",
        name: "admin-page",
        component: () => import("pages/admin/Dashboard.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
