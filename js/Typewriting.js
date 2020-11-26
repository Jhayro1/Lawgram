$(function() {
 Website();
  function Website() {
	  CheckScripts();		
  }
  function CheckScripts() {

    $(document).ready(function(){
      Typewriting();
    });
 }
  function Typewriting() {
  $(document).ready(function(){
	  setTimeout( function(){
		  if($("#site-type").length) {
          $(".typewrite span").typed({
            strings: ["Honestidad", "Seguridad","Lawgram"],
            typeSpeed: 120,
            backDelay: 800,
            loop: false,
            contentType: 'html', 
            loopCount: false,
          });
      }
	  }, 4000);
  });
  }
})