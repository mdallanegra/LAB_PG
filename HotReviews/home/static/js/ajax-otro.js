var csrftoken = $.cookie('csrftoken');
function csrfSafeMethod(method) {
	return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$("#boton_prod").click(function () {
	valor = $("#id_querycom").val();

	//	El siguiente if se utiliza para que no llame a una pagina sin haber elegido
	//	producto, ya que con variable vacía elige el primer producto de la lista

	if (isNaN(valor)) { // VER OTRO POR LAS DUDAS QUE LA LOGICA TENGA PROBLEMAS
		//	alert("SE ELIGIÓ PRODUCTO!")
		//	console.log(valor)
		respuestproducto(valor)
	}
});

// FORMA ORIGINAL DE "RENDER" DE PAGINA CON JAVASCRIPT
function changeColor(newColor) {
	const elem = document.getElementById('para');
	elem.style.color = newColor;
}
function respuestproducto(valor) {
	$.ajax({
		beforeSend: function (xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
				xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		},
		url: "/producto/buscar_producto2/",
		type: "GET",
		data: { valor: valor, },
		success: function (json) {
			valor_retornado0 =
				"<h2 style='text-align: center'>" + json[0].Producto + "</h2>" +
				"<h2 style='text-align: center'>" + json[0].Tipo + "</h2>" +
				"<div> <img style='width:60%;' src='/media/" + json[0].Imagen + "'/>" + "</div>"
			$('#contenedor_filtrado0').html(valor_retornado0);

			//	
			//	Mas adelante se copia el mismo codigo que en la página ver_imagen.html,
			//  la cual tiene un carrito funcional pero en este caso no se comporta de 
			//  la misma forma y el url "{% url 'producto' %}" sigue sin funcionar por 
			//	lo que se usa la forma tradicional. Probablemente al renderizar, el 
			//	navegador no carga las partes del div en forma correcta
			//

			//	PRUEBA 1

			const src = `/producto`
			valor_retornado1 =
				`
				<br>
				<a href="${src}">Retorno a Productos</a>
				<br>
				<input type="submit"  hidden class="col-12 vervalor" value="1"/>
				<input type="submit"  hidden class="col-12 verid" value="Prod_{{producto.id}}"/>
				<a href="" class="agregar">Agregar al Carrito</a> 
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</svg>
				<br><br>
				`
			$('#contenedor_filtrado1').html(valor_retornado1);

			//	PRUEBA 2

			document.getElementById("contenedor_filtrado2").innerHTML =

				'<br>' +
				`<a href='{% url 'producto' %}'>Retorno a Productos2</a>
				<br>
				<input type="submit"  hidden class="col-12 vervalor" value="1"/>
				<input type="submit"  hidden class="col-12 verid" value="Prod_{{producto.id}}"/>
				<a href="" class='agregar'>Agregar al Carrito</a> 
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</svg>
				<br><br>
				`
			//	PRUEBA 3

			var html =
				`
				<br>
				<a href="{% url 'producto' %}">Retorno a Productos3</a>
				<br>
				<input type="submit"  hidden class="col-12 vervalor" value="1"/>
				<input type="submit"  hidden class="col-12 verid" value="Prod_{{producto.id}}"/>
				<a href="" class="agregar">Agregar al Carrito</a> 
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
				</svg>
				<br><br>
				`
			html = $.parseHTML(html);
			$("#contenedor_filtrado3").append(html);

			//	PRUEBA 4

			const frag = document.createRange().createContextualFragment(`
				<br>
				<a href="{% url 'producto' %}">Retorno a Productos</a>
				<a href="{% url 'producto' %}" class="hidden" id="UrlPROD" data-url="{% url 'producto' %}" />
				<br>
				<input type="submit" hidden class="col-12 vervalor" value="1" />
				<input type="submit" hidden class="col-12 verid" value="Prod_{{producto.id}}" />
				<a href="" class="agregar">Agregar al Carrito</a>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				</svg>
				<br><br>
				<p id="para">Some text here</p>
    			<button onclick="changeColor('blue');">blue</button>
    			<button onclick="changeColor('red');">red</button>
				<br><br>`
			);

			$('#contenedor_filtrado4').html(frag);

			const frag1 = document.createRange().createContextualFragment(`
            	<button>Retorno a Productos</button>
			`
			);

			$('#contenedor_filtrado5').html(frag1);
			const frag2 = document.createRange().createContextualFragment(`
            	<button class="agregar">Agregar al Carrito
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				</svg>
				</button>
			`
			);
			$('#contenedor_filtrado6').html(frag2);
		},
		error: function (xhr, errmsg, err) {
		},
	});
}
