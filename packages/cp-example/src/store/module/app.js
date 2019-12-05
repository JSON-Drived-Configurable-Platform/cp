/* eslint-disable no-param-reassign */
import services from "@/service";

export default {
  state: {
    menuList: [
      {
        label: "Home",
        path: "/home"
      },
      {
        label: "Form",
        path: "/form",
        submenu: [
          {
            label: "Index",
            path: "/form"
          },
          {
            label: "Simple",
            path: "/form/simple"
          },
          {
            label: "Modal",
            path: "/form/modal"
          },
          {
            label: "Multi Modal",
            path: "/form/multi-modal"
          },
          {
            label: "Slideout",
            path: "/form/slideout"
          },
          {
            label: "Popover",
            path: "/form/popover"
          },
          {
            label: "Inline Table",
            path: "/form/inline"
          },
          {
            label: "Editable Table",
            path: "/form/editable-table"
          },
          {
            label: "Takeover",
            path: "/form/takeover"
          },
          {
            label: "Wizard",
            path: "/form/wizard"
          },
          {
            label: "Sectioned",
            path: "/form/sectioned"
          },
          {
            label: "Conversational",
            path: "/form/conversational"
          }
        ]
      },
      {
        label: "RBAC",
        path: "/rbac",
        submenu: [
          {
            label: "Home",
            path: "/rbac/home"
          },
          {
            label: "Users",
            path: "/rbac/users"
          },
          {
            label: "Roles",
            path: "/rbac/roles"
          },
          {
            label: "Permissions",
            path: "/rbac/permissions"
          }
        ]
      }
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
