$(document).ready(function () {

    var formulario1 = $('#persona');
    var formulario2 = $('#abogado');

    var nombre = $('#nombre1');
    var email = $('#email1');
    var edad = $('#edad1');
    var contraseña = $('#contraseña1');
    var confirmar_contraseña = $('#confirma-contraseña1');
    var check=$('#checkf1').is(":checked");

    var nombre2 = $('#nombre2');
    var email2 = $('#email2');
    var edad2 = $('#edad2');
    var especialidad2 = $('#especialidad2');
    var contraseña2 = $('#contraseña2');
    var confirmar_contraseña2 = $('#confirma-contraseña2');
    var check2=$('#checkf2').is(":checked");
  
    function valNombre(e) {
  
      if (nombre.val() == '' || nombre.val() == null) {
        e.preventDefault();
        $('input[id="nombre1"] + .error').css('display', 'block');
      } else {
        $('input[id="nombre1"] + .error').css('display', 'none');
      }
  
    }
  
    function valEmail(e) {
  
      if (email.val() == '' || email.val() == null) {
        e.preventDefault();
        $('input[id="email1"] + .error').css('display', 'block');
      } else {
        $('input[id="email1"] + .error').css('display', 'none');
      }
  
    }
    function valEdad(e) {
  
      if (edad.val() =='' || edad.val()==null) {
        e.preventDefault();
        $('input[id="edad1"] + .error').css('display', 'block');
      } else {
        $('input[id="edad1"] + .error').css('display', 'none');
      }
  
    }
    function valcontraseña(e) {

      
      if (contraseña.val() == '' || contraseña.val() == null) {
        e.preventDefault();
        $('input[id="contraseña1"] + .error').css('display', 'block');
      } else {
        $('input[id="contraseña1"] + .error').css('display', 'none');
        var password = $('#contraseña1').text();

      }
  
    }
    function valconfirma_contraseña(e) {
  
      if (confirmar_contraseña.val() != valcontraseña.password || confirmar_contraseña.val() == null) {
        e.preventDefault();
        $('input[id="confirma-contraseña1"] + .error').css('display', 'block');
      } else {
        $('input[id="confirma-contraseña1"] + .error').css('display', 'none');
      }
  
    }
    function valcheck(e) {
      
      if (!check) {
        e.preventDefault();
        $('input[id="checkf1"]+.error').css('display', 'block');
      } else {
        $('input[id="checkf1"]+.error').css('display', 'none');
      }
  
    }

    /*----------------------*/

    function valNombre1(e) {
  
      if (nombre2.val() == '' || nombre2.val() == null) {
        e.preventDefault();
        $('input[id="nombre2"] + .error').css('display', 'block');
      } else {
        $('input[id="nombre2"] + .error').css('display', 'none');
      }
  
    }
  
    function valEmail1(e) {
  
      if (email2.val() == '' || email2.val() == null) {
        e.preventDefault();
        $('input[id="email2"] + .error').css('display', 'block');
      } else {
        $('input[id="email2"] + .error').css('display', 'none');
      }
  
    }
    function valEdad1(e) {
  
      if (edad2.val() =='' || edad2.val()==null) {
        e.preventDefault();
        $('input[id="edad2"] + .error').css('display', 'block');
      } else {
        $('input[id="edad2"] + .error').css('display', 'none');
      }
  
    }
    function valEspecialidad1(e) {
  
      if (especialidad2.val() == '' || especialidad2.val() == null) {
        e.preventDefault();
        $('input[id="especialidad2"] + .error').css('display', 'block');
      } else {
        $('input[id="especialidad2"] + .error').css('display', 'none');
      }
  
    }
    function valcontraseña1(e) {
  
      if (contraseña2.val() == '' || contraseña2.val() == null) {
        e.preventDefault();
        $('input[id="contraseña2"] + .error').css('display', 'block');
      } else {
        $('input[id="contraseña2"] + .error').css('display', 'none');
      }
  
    }
    function valconfirma_contraseña1(e) {
  
      if (confirmar_contraseña2.val() == '' || confirmar_contraseña2.val() == null) {
        e.preventDefault();
        $('input[id="confirma-contraseña2"] + .error').css('display', 'block');
      } else {
        $('input[id="confirma-contraseña2"] + .error').css('display', 'none');
      }
  
    }
    function valcheck1(e) {
      
      if (!check2) {
        e.preventDefault();
        $('input[id="checkf2"] +.error').css('display', 'block');
      } else {
        $('input[id="checkf2"]+.error').css('display', 'none');
      }
  
    }
  
    
  
  
    function validacion(e){
      valNombre(e);
      valEmail(e);
      valEdad(e);
      valcontraseña(e);
      valconfirma_contraseña(e);
      valcheck(e);
  
    }

    
    function validacion1(e){
      valNombre1(e);
      valEmail1(e);
      valEdad1(e);
      valEspecialidad1(e);
      valcontraseña1(e);
      valconfirma_contraseña1(e);
      valcheck1(e);
  
    }

    formulario1.on('submit', validacion);
    formulario2.on('submit', validacion1);
  
  
  })
  