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
  console.log(msg.data);
  alerts = localStorage.getItem("latestAlerts");
  // console.log("alerta din local"+alerts);
  // console.log("alerta din get"+msg.data);
  localStorage.setItem("latestAlerts", msg.data);
  if(alerts != msg.data){
    // localStorage.setItem("latestAlerts", msg.data);
    // if(msg.data.severity > alerts.severity)
    if(JSON.parse(msg.data).frequency.times > 1){
      //alert with frequency
      localStorage.setItem("frqAlert", msg.data);
      console.log(counter);
    }
    notify();
  }
}
var counter = 1;

var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");
oneMinuteFetcher.addEventListener('message', handleResponse);



setInterval(function(){
  var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");
  counter++;
  console.log(counter);

}, 10000);
