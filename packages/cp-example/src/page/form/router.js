export default [
  {
    path: "/form",
    redirect: "/form/index"
  },
  {
    path: "/form/index",
    component: () => import(/* webpackChunkName: "form-index" */ "./index")
  },
  {
    path: "/form/simple",
    component: () =>
      import(/* webpackChunkName: "form-simple" */ "./views/simple")
  },
  {
    path: "/form/modal",
    component: () =>
      import(/* webpackChunkName: "form-modal" */ "./views/modal")
  },
  {
    path: "/form/multi-modal",
    component: () =>
      import(/* webpackChunkName: "form-multi-modal" */ "./views/multi-modal")
  },
  {
    path: "/form/slideout",
    component: () =>
      import(/* webpackChunkName: "form-slideout" */ "./views/slideout")
  },
  {
    path: "/form/popover",
    component: () =>
      import(/* webpackChunkName: "form-popover" */ "./views/popover")
  },
  {
    path: "/form/inline",
    component: () =>
      import(/* webpackChunkName: "form-inline" */ "./views/inline")
  },
  {
    path: "/form/editable-table",
    component: () =>
      import(/* webpackChunkName: "editable-table" */ "./views/editable-table")
  },
  {
    path: "/form/takeover",
    component: () =>
      import(/* webpackChunkName: "form-takeover" */ "./views/takeover")
  },
  {
    path: "/form/wizard",
    component: () =>
      import(/* webpackChunkName: "form-wizard" */ "./views/wizard")
  },
  {
    path: "/form/sectioned",
    component: () =>
      import(/* webpackChunkName: "form-sectioned" */ "./views/sectioned")
  },
  {
    path: "/form/conversational ",
    component: () =>
      import(
        /* webpackChunkName: "form-conversational" */ "./views/conversational"
      )
  }
];
