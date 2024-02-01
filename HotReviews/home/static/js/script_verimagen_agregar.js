var csrftoken = $.cookie('csrftoken');
function csrfSafeMethod(method) {
    "use strict";
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function AgregarI(cada_producto_id, valor) {
    "use strict";
    $.ajax({
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        },
        url: "/producto/agregar/",
        type: "GET",
        data: { cada_producto_id: cada_producto_id, valor: valor },
        success: function (json) {
            //alert("SE ELIGIÓ PRODUCTO!")
            console.log("Nombre Producto: " + json[0].idproducto.toString())
            console.log("Cantidad Producto: " + json[0].cantidad.toString())
            localStorage.setItem(json[0].idproducto.toString(), json[0].cantidad.toString());
            //location.reload();
        },
        error: function (xhr, errmsg, err) {
        }
    });
}
$('.agregar').click(function (event) {
    "use strict";
    event.preventDefault();
    let cada_producto_id = $(this).parent().find('.verid').val();
    let valor = $(this).parent().find('.vervalor').val();

    let i;
    for (i = 0; i < localStorage.length; i++) {
        let clave_eliminar = localStorage.key(i);
        if (!clave_eliminar.startsWith("Prod_")) {
            localStorage.removeItem(clave_eliminar);
        }
    }
    for (i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let el_valor = localStorage[clave];
        if (clave == cada_producto_id) {
            valor = el_valor;
        }
        else {
        }
    }
    AgregarI(cada_producto_id, valor);
});
