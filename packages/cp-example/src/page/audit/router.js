export default [
  {
    path: "/audit",
    redirect: "/audit/total"
  },
  {
    path:  "/audit/total",
    component: () => import(/* webpackChunkName: "audit-total" */ "./index")
  },
  {
    path: "/audit/edit",
    component: () => import(/* webpackChunkName: "audit-edit" */ "./index")
  }
];
