export default [
  {
    path: "/form-popover",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
