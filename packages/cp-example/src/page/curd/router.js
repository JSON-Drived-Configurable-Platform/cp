export default [
  {
    path: "/curd",
    redirect: "/curd/user"
  },
  {
    path: "/curd/:pageId",
    component: () => import(/* webpackChunkName: "data-report" */ "./index")
  }
];
