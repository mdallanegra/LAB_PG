$(document).ready(function () {
    $("#flip-img").hover(function () {
        if ($("#flip-img").css("transform") == 'none') {
            $("#flip-img").css("transform", "rotateY(180deg)");
            $("#flip-img img").attr("src", "static/imagenes/Customer-Satisfaction-Surveys.png");
        }
        else {
            $("#flip-img").css("transform", "");
            $("#flip-img img").attr("src", "static/imagenes/Customer-Satisfaction-Surveys.png");
        }
    });
});

$(document).ready(function () {
    new jBox('Tooltip', {
        attach: '#Tooltip-Arriba',
        theme: 'TooltipDark'
    });

    new jBox('Tooltip', {
        attach: '#Tooltip-Abajo',
        theme: 'TooltipDark',
        position: {
            x: 'center',
            y: 'bottom'
        }
    });
    new jBox('Tooltip', {
        attach: '#Tooltip-Izquierda1',
        theme: 'TooltipDark',
        position: {
            x: 'left',
            y: 'center'
        },
        outside: 'x'
    });
    new jBox('Tooltip', {
        attach: '#Tooltip-Izquierda2',
        theme: 'TooltipDark',
        position: {
            x: 'left',
            y: 'center'
        },
        outside: 'x',
        closeOnMouseleave: true
    });
});
