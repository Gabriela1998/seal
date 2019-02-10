function verificare(ceva){
  // console.log(JSON.parse(ceva));
  localStorage.setItem(1, ceva)
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)

            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync("http://127.0.0.1:8080/alerta.txt", verificare);
