function showMoreAlert(id) {
    var alert = document.getElementById("alert"+id);
    var button = document.getElementById("showMoreAlert"+id);
    if(alert.className == "alert less"){
      alert.className = "alert more";
      button.innerText = "Show less";
    } else {
      alert.className = "alert less";
      button.innerText = "Show more";
    }
}
