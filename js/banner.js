$(document).ready(function () {

  var Banner = $('#banner');

  function alturaBanner(){

    var altura = $(window).height();
    Banner.css('height', altura);

  }
  alturaBanner();

  $(window).resize(alturaBanner);
  
  
  
 
  
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{your-app-id}',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });


});
