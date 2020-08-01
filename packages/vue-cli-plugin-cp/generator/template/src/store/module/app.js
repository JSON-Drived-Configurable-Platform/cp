/* eslint-disable no-param-reassign */
import services from "@/service";

export default {
  state: {
    menuList: [
      // {
      //   label: "Form",
      //   path: "/form",
      //   submenu: [
      //     {
      //       label: "Simple Form",
      //       path: "/form-simple"
      //     },
      //     {
      //       label: "Modal Form",
      //       path: "/form-modal"
      //     },
      //     {
      //       label: "Multi Modal Form",
      //       path: "/form-multi-modal"
      //     },
      //     {
      //       label: "Popover Form",
      //       path: "/form-popover"

      //     },
      //     {
      //       label: "Editable Table",
      //       path: "/form-editable-table"
      //     },
      //     {
      //       label: "Slideout Form",
      //       path: "/form-slideout"
      //     },
      //     {
      //       label: "Sectioned Form",
      //       path: "/form-sectioned"
      //     },
      //     {
      //       label: "Takeover Form",
      //       path: "/form-takeover"
      //     },
      //     {
      //       label: "Wizard Form",
      //       path: "/form-wizard"
      //     },
      //     {
      //       label: "Inline Table Form",
      //       path: "/form-inline-table"
      //     },
      //     {
      //       label: "Conversational Form",
      //       path: "/form-conversational"
      //     },
      //   ]
      // }
    ],
    dynamicMenuList: [],
    breadCrumbList: []
  },
  mutations: {
    setDynamicMenuList(state, menuList) {
      state.dynamicMenuList = menuList;
      state.menuList = [...state.menuList, ...menuList];
    },

    breadCrumbList(state, breadCrumbList) {
      state.breadCrumbList = breadCrumbList;
    }
  },
  actions: {
    getDynamicMenuList({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          services
            .getMenuList()
            .then(({ errno, data }) => {
              if (+errno === 200 || +errno === 0) {
                commit("setDynamicMenuList", data);
                resolve(true);
              } else {
                reject(new Error(`response errno is: ${errno}`));
              }
            })
            .catch(err => {
              reject(err);
            });
        } catch (error) {
          reject(error);
        }
      });
    }
  }
};
