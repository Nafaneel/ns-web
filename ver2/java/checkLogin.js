const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  if(queryString=="") {
    window.location.replace('error.html');
  }
    
let pass = localStorage.getItem(strNew);  
  
if(strNew=="Nafaneel") {
  //document.getElementById("found").innerHTML = "FOUND";
  window.location.replace('admin.html?user='+strNew);
  
} else if(pass=="null") {
  window.location.replace('error.html');
} else {

  document.getElementById("text").innerHTML = "Hello, "+strNew;
}