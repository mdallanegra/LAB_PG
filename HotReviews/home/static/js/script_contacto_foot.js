/*
//Forma de giro al inicio de la página
gsap.to(".satisfaction", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: 'bounce.out'
});

*/

//Forma de giro cuando puntero pasa sobre imagen

var RotaImagen = new TimelineMax({ paused: true });
RotaImagen.to(".satisfaction", 2, {
    rotation: 360,
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease: 'bounce.out'
});

document.querySelector(".satisfaction").addEventListener("mouseover", GiraImagen);

function GiraImagen() {
    if (!RotaImagen.isActive()) {
        RotaImagen.play(0);
    }
}
