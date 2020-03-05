export default [
  {
    path: "/form-sectioned",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
