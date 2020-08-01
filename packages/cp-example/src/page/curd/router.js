export default [
  {
    path: "/curd",
    redirect: "/curd/user"
  },
  {
    path:  "/curd/user",
    component: () => import(/* webpackChunkName: "curd-user" */ "./index")
  },
  {
    path: "/curd/post",
    component: () => import(/* webpackChunkName: "curd-post" */ "./index")
  }
];
