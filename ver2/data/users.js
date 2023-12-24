localStorage.setItem("Nafaneel", "nexusnaf");
localStorage.setItem("Andrew_mc", "nexus2");
localStorage.setItem("Nafaneel2", "nexus1");
localStorage.setItem("Zoey", "nexus");
localStorage.setItem("TM", "nexus1");
localStorage.setItem("Lewis", "nexus");

function loginPass() {


  var user = document.getElementById("username").value;

  let pass = localStorage.getItem(user);

  return pass;
}

function optionPass() {


  var user = strNew;

  let pass = localStorage.getItem(user);

  return pass;
}

function revoved() {
   
  if(strNew=="Nafaneel") {
    //document.getElementById("found").innerHTML = "FOUND";
    window.location.replace('admin.html?user='+strNew);
    document.getElementById("text").innerHTML = "Hello, "+strNew;
  } else if(strNew=="Andrew_mc") {
    document.getElementById("text").innerHTML = "Hello, "+strNew;
  } else if(strNew=="Nafaneel2") {
    document.getElementById("text").innerHTML = "Hello, "+strNew;
  } else if(strNew=="Zoey") {
    document.getElementById("text").innerHTML = "Hello, "+strNew;
  }
  else {
    window.location.replace('error.html');
  }
}