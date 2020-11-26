$(document).ready(function () {

    var slider = $('#slider1');
    var btnAnterior = $('#btnAnterior1');
    var btnSiguiente = $('#btnSiguiente1');
  
    $('#slider1 .slide1:last').insertBefore('#slider1 .slide1:first');
    slider.css('margin-left', '-75%');
  
  
    function moverDerecha() {
      if (!slider.is(':animated')) {
        slider.animate({
        marginLeft: '-159.6%'
        }, 700, function () {
          $('#slider1 .slide1:first').insertAfter('#slider1 .slide1:last');
        slider.css('margin-left', '-75%');
          resetInterval();
        });
      }
  
    }
  
    btnSiguiente.on('click', moverDerecha);
  
    function moverIzquierda() {
      if (!slider.is(':animated')) {
        $('#slider1 .slide1:last').insertBefore('#slider1 .slide1:first');
      slider.css('margin-left', '-159.6%');
        slider.animate({
        marginLeft: '-75%'
        }, 700, function () {
          resetInterval()
        });
      }
  
    }
  
    btnAnterior.on('click', moverIzquierda);
  
  
  
    var intervalo = setInterval(moverDerecha, 5000);
  
    function resetInterval(){
      clearInterval(intervalo);
      intervalo = setInterval(moverDerecha, 5000);
    }
  
  
  
  
  });