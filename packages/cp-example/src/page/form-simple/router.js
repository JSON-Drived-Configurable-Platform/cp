export default [
  {
    path: "/form-simple",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
