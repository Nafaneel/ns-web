function backClick() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  formatBack = 'options.html?user=' + strNew;
  window.location.replace('../options.html?user=' + strNew);
}