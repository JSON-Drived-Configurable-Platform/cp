export default [
  {
    path: "/form",
    redirect: "/form/index"
  },
  {
    path: "/form/index",
    component: () => import(/* webpackChunkName: "form-index" */ "./index")
  }
  // {
  //   path: "/form/conversational",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "form-conversational" */ "./views/conversational"
  //     )
  // }
];
