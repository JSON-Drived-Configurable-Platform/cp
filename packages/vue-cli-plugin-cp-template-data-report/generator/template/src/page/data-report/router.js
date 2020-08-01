export default [
  {
    path: "/data",
    redirect: "/data/general"
  },
  {
    path:  "/data/general",
    component: () => import(/* webpackChunkName: "data-general" */ "./index")
  },
  {
    path: "/data/real-time",
    component: () => import(/* webpackChunkName: "data-real-time" */ "./index")
  }
];
