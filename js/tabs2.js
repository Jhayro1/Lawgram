(function(){

var propTabs2 = {

	primer_encabezado: document.getElementById('encabezado_menu-form').firstElementChild,
	primer_contenido: document.getElementById('contenido_form').firstElementChild,
	enlaces_encabezado: document.querySelectorAll('#encabezado_menu-form li a'),
	li_encabezado: document.querySelectorAll('#encabezado_menu-form li'),
	divs_contenido: document.querySelectorAll('#contenido_form > div'),
	contenido_activo: null

}

var metTabs2 = {
	
	inicio: function(){
		

		for (var i = 0; i < propTabs2.enlaces_encabezado.length; i++) {
			propTabs2.enlaces_encabezado[i].addEventListener('click', metTabs2.evento);
		}
	},

	evento: function(e){
		e.preventDefault();

		for (var i = 0; i < propTabs2.li_encabezado.length; i++) {
			propTabs2.li_encabezado[i].className = '';
		}

		for (var i = 0; i < propTabs2.divs_contenido.length; i++) {
			propTabs2.divs_contenido[i].className = '';
		}

		this.parentElement.className = 'active';
		propTabs2.contenido_activo = this.getAttribute('href');
		document.querySelector(propTabs2.contenido_activo).className = 'active';
		document.querySelector(propTabs2.contenido_activo).style.opacity = 0;
		setTimeout(function(){
			document.querySelector(propTabs2.contenido_activo).style.opacity = 1;
		}, 100);
	}

}

metTabs2.inicio();
}())
	