export function computeBreadCrumbList(currentPath = "", menuList = []) {
  console.log(currentPath, menuList);
  let breadCrumbList = [];
  menuList.forEach(item => {
    if (item.submenu) {
      item.submenu.forEach(subItem => {
        if (currentPath === subItem.path) {
          breadCrumbList.push(subItem);
        }
      });
    } else {
      if (currentPath === item.path) {
        breadCrumbList.push(item);
      }
    }
  });
  return breadCrumbList;
}
