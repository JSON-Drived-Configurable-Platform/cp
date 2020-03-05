export default [
  {
    path: "/form-slideout",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
