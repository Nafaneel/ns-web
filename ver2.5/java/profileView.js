const queryString = window.location.search;
console.log(queryString);
strNew = queryString.replace("?user=", "");
if (queryString == "") {
  window.location.replace('error.html');
}
