export default [
  {
    path: "/form-modal",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
