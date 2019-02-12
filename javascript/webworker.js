function fillAlertWithContent(json){
  title = document.getElementById("title");
  title.textContent = json.title;

  intro = document.getElementById("intro-content");
  intro.textContent = json.intro;

  causes = document.getElementById("causes-content");
  causes.textContent = json.causes;

  symptoms = document.getElementById("symptoms-content");
  symptoms.textContent = json.symptoms;
}

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
// loadjscssfile("javascript/buildAlert.js", "js");

// var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");

function handleResponse(msg){
  console.log(msg.data);
  alert = localStorage.getItem("latestAlert");
  // console.log("alerta din local"+alerts);
  // console.log("alerta din get"+msg.data);
  // localStorage.setItem("latestAlerts", msg.data);
  if(alert != msg.data){
    console.log(msg.data);
    // localStorage.setItem("latestAlerts", msg.data);
    // if(msg.data.severity > alerts.severity)
    localStorage.setItem("latestAlert", msg.data);
    notify();
    if(JSON.parse(msg.data).frequency.times > 1){
      //alert with frequency

      localStorage.setItem("frqAlert", msg.data);
    }

  }
}
var counter = 1;

var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");
oneMinuteFetcher.addEventListener('message', handleResponse);



setInterval(function(){
  var oneMinuteFetcher = new Worker("javascript/testpythonserver.js");
  counter++;
  // console.log(counter);
  alertToShow = localStorage.getItem("frqAlert");
  alertToShow = JSON.parse(alertToShow);
  if(alertToShow.frequency.times > 1){
    if(counter % alertToShow.frequency.interval == 0){
      location.replace("http://localhost/seal/#newsfeedd");
      if(location.hash.substr(1) == "newsfeedd"){
        fillAlertWithContent(alertToShow);
        notify();
        alertToShow.frequency.times = alertToShow.frequency.times -1;
        localStorage.setItem("frqAlert", JSON.stringify(alertToShow));
      }
    }
  }

}, 10000);
