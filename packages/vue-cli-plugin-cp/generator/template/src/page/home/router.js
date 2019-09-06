export default [
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "home" */ "./index")
  }
];
