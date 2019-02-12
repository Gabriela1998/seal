function sendNotification (data) {
    if (data == undefined || !data) { return false }
    var title = (data.title === undefined) ? 'Notification' : data.title
    var clickCallback = data.clickCallback
    var message = (data.message === undefined) ? 'null' : data.message
    var icon = (data.icon === undefined) ? 'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png' : data.icon
    var sendNotification = function (){
        var notification = new Notification(title, {
            icon: icon,
            body: message
        })
        if (clickCallback !== undefined) {

            notification.onclick = function(event) {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.location = "http://localhost/seal/index.html#newsfeed";
            notification.close();
            }
        }
    }

    if (!window.Notification) {
        return false
    } else {
        if (Notification.permission === 'default') {
            Notification.requestPermission(function (p) {
                if (p !== 'denied') {
                    sendNotification()
                }
            })
        } else {
            sendNotification()
        }
    }
}

function notify(){
    sendNotification({
      title: 'Allergy alert',
      message: 'There is an allergy alert. You should check your newsfeed.',
      icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
      clickCallback: function () {
      }
    });
}



function share()
{
    FB.ui({
      method: 'share',
      display: 'popup',
      quote: 'dkfsgdjhsf',
    }, function(response){console.log(response)});
}
