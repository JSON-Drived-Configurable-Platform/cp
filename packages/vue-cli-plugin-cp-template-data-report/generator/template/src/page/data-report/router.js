export default [
  {
    path: "/data-report",
    redirect: "/data-report/general"
  },
  {
    path: "/data-report/:pageId",
    component: () => import(/* webpackChunkName: "data-report" */ "./index")
  }
];
