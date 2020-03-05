export default [
  {
    path: "/form-multi-modal",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
