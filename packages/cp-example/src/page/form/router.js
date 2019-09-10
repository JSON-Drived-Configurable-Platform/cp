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
    component: () => import(/* webpackChunkName: "form-simple" */ "./simple")
  },
  {
    path: "/form/modal",
    component: () => import(/* webpackChunkName: "form-modal" */ "./modal")
  },
  {
    path: "/form/multi-modal",
    component: () =>
      import(/* webpackChunkName: "form-multi-modal" */ "./multi-modal")
  },
  {
    path: "/form/slideout",
    component: () =>
      import(/* webpackChunkName: "form-slideout" */ "./slideout")
  },
  {
    path: "/form/popover",
    component: () => import(/* webpackChunkName: "form-popover" */ "./popover")
  },
  {
    path: "/form/inline",
    component: () => import(/* webpackChunkName: "form-inline" */ "./inline")
  },
  {
    path: "/form/editable-table",
    component: () =>
      import(/* webpackChunkName: "editable-table" */ "./editable-table")
  },
  {
    path: "/form/takeover",
    component: () =>
      import(/* webpackChunkName: "form-takeover" */ "./takeover")
  },
  {
    path: "/form/wizard",
    component: () => import(/* webpackChunkName: "form-wizard" */ "./wizard")
  },
  {
    path: "/form/sectioned",
    component: () =>
      import(/* webpackChunkName: "form-sectioned" */ "./sectioned")
  },
  {
    path: "/form/conversational ",
    component: () =>
      import(/* webpackChunkName: "form-conversational" */ "./conversational")
  }
];
