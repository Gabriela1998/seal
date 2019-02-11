function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("javascript/notification.js", "js");

// var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");

function handleResponse(msg){
  alerts = localStorage.getItem("latestAlerts");
  // console.log("alerta din local"+alerts);
  // console.log("alerta din get"+msg.data);
  if(alerts != msg.data){
    localStorage.setItem("latestAlerts", msg.data);
    notify();
  }
}




var counter = 0;

setInterval(function(){
  var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");
  oneMinuteFetcher.addEventListener('message', handleResponse);
  counter++;
  console.log(counter);

}, 10000);
