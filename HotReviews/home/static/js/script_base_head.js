$(document).ready(function () {
    $("#img_prueba").hover(function () {
        $("#img_prueba").effect("shake");
    });
});

$(document).ready(function () {
    $("#AcercaNos").on('mouseenter', function () {
        $(this).css('background', 'rgb(232, 242, 204)');
    }).on('mouseleave', function () {
        $(this).css('background', '');
    });
});
$(document).ready(function () {
    $("#IngresoCli").on('mouseenter', function () {
        $(this).css('background', 'rgb(248, 232, 10)');
    }).on('mouseleave', function () {
        $(this).css('background', '');
    });
});
$(document).ready(function () {
    $("#Contactss").on('mouseenter', function () {
        $(this).css('background', 'rgb(245, 235, 186)');
    }).on('mouseleave', function () {
        $(this).css('background', '');
    });
});
$(document).ready(function () {
    $("#Productoss").on('mouseenter', function () {
        $(this).css('background', 'rgb(238, 238, 220)');
    }).on('mouseleave', function () {
        $(this).css('background', '');
    });
});