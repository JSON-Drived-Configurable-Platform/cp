export default [
  {
    path: "/rbac",
    redirect: "/rbac/home"
  },
  {
    path: "/rbac/home",
    component: () => import(/* webpackChunkName: "form-index" */ "./home")
  },
  {
    path: "/rbac/users",
    component: () => import(/* webpackChunkName: "form-index" */ "./views/user")
  },
  {
    path: "/rbac/roles",
    component: () => import(/* webpackChunkName: "form-index" */ "./views/role")
  },
  {
    path: "/rbac/permissions",
    component: () =>
      import(/* webpackChunkName: "form-index" */ "./views/permission")
  }
];
