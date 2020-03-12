export function computeBreadCrumbList(currentPath = "", menuList = []) {
  let breadCrumbList = [];
  menuList.forEach(item => {
    if (item.submenu) {
      item.submenu.forEach(subItem => {
        if (currentPath === subItem.path) {
          breadCrumbList.push(item.label, subItem.label);
        }
      });
    } else {
      if (currentPath === item.path) {
        breadCrumbList.push(item.label);
      }
    }
  });
  return breadCrumbList;
}
