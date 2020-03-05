export default [
  {
    path: "/form-inline-table",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
