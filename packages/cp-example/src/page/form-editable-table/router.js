export default [
  {
    path: "/form-editable-table",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
