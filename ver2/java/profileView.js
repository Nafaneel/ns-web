  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  if(queryString=="") {
    window.location.replace('error.html');
  } 
  document.getElementById("welcome").innerHTML = "Hello, "+strNew;
  getTokens();
  //document.getElementById("welcome").innerHTML = "Hello, "+strNew;
  
  
  function getTokens() {
    fileVar = "../tokens/"+strNew+".txt"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileVar, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                responseText = strNew +" You have "+allText+" Tokens remaining!";
                //alert(responseText);
                
                document.getElementById("remaining").innerHTML = allText + "Tokens";
              return allText;
            }
        }
    }
    rawFile.send(null);
  }  