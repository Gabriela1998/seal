  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
        console.log("Im in");
        // window.location.href="index.html";
      } else {
        // The person is not logged into your app or we are unable to tell.
        console.log("Im out");
        // window.location.href="login.html";

      }
        }


  function statusChangeCallbackProfile(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        getInfo();
        // console.log("vreau sa login");
        // window.location.href="index.html";
      } else {
        // The person is not logged into your app or we are unable to tell.
        console.log("Im out");
        // window.location.href="login.html";
      }
    }


  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function checkLoginStateProfile() {
    FB.getLoginStatus(function(response) {
      statusChangeCallbackProfile(response);
    });
  }


  var redirectMe = function (link) {
  window.location.href = link;
  };

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '387362528682096',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v3.2' // The Graph API version to use for the call
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });


//     FB.getLoginStatus(function (response) {
//     if (response.status === 'connected') {
//         FB.api('/me/permissions', function(response) {
//             if (true) {
//                  redirectMe('http://localhost/try/index.html');
//             }
//         });
//     }
//     statusChangeCallback(response);
// }, true);



  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    });

 FB.Event.subscribe('auth.login', function () {
          window.location = "http://localhost/seal/";
      });
    // window.location.href="index.html";
  }


  function getInfo() {
    var user_id = 0;
    FB.api('/me?fields=name,email,picture.height(961)', function(response) {
      user_id = response.id;
      getFriends(user_id);
      document.getElementById('profile-avatar').src=response.picture.data.url;
      document.getElementById('name').innerHTML = response.name;
      document.getElementById('email').innerHTML = response.email;
    });

    }

  function getFriends(id) {
  FB.api(
        '/'+id+'/friends',
        'GET',
        {},
        function(response) {
          if(response['data'].length > 0)
          {
            var friends = document.getElementById('friends');
            var div = document.createElement("div");
            for (let i=0; i<response['data'].length; i++) {
                div.innerHTML += response['data'][i]['name'];
                div.innerHTML += "<br>";
                friends.insertAdjacentElement('afterend',div);
            }
          }

        }
      )
    }



function logOut(){
  FB.logout(function(response) {
  // user is now logged out
  });
   FB.Event.subscribe('auth.login', function () {
          window.location = "http://localhost/seal/";
      });
}

function redirect(){
  window.location="http://localhost/seal/";
  // FB.Event.subscribe('auth.login', function(){
  //   window.location = "http://localhost/try/index.html#home";
  //   });
  // window.location.hash = "#home";
}
