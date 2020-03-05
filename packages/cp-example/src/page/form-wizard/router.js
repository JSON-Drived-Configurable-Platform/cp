export default [
  {
    path: "/form-wizard",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
