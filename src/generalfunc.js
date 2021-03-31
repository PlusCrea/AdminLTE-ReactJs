export function islinkactive(url) {
  let pathName = window.location.pathname;
  let isurlinclude = pathName.includes(url);
  return isurlinclude ? "nav-link active" : "nav-link";
}

export function ismenuopen(url) {
  let pathName = window.location.pathname;
  let isurlinclude = pathName.includes(url);
  return isurlinclude
    ? "nav-item has-treeview menu-open"
    : "nav-item has-treeview";
}

export function returnurl() {
  return "https://adminlte-react.web.app";
}
