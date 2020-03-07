export default [
  {
    path: "/form-conversational",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./index.vue")
  }
];
