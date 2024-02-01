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
			window.location = '/producto/' + json[0].Id + '/ver';
			//	Aqui envia directamente a la pagina del producto, igualmente sería
			//	importante poder aplicar la url de django {% url 'ver' producto.id%}
		},
		error: function (xhr, errmsg, err) {
		},
	});
}
