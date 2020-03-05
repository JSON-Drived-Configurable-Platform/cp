export default [
  {
    path: "/form-takeover",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
