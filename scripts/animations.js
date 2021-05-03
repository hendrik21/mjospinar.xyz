//Linea de tiempo de animaciones del sitio web, usando GSAP 3

gsap.from(".tatuajes_todos", {x: 200, duration: 2, opacity: 0, ease: "expo"});
gsap.from(".frase_1_animacion", {x: -200, delay: 1, duration: 2, opacity: 0, ease: "expo"});
gsap.from(".carrusel", {x: 200, delay: 2, duration: 2, opacity: 0, ease: "expo"});

function tatuajes_todos(){

	gsap.from(".tatuajes_todos", {x: 200, duration: 2, opacity: 0, ease: "expo"});
};

function tatuajes_2021(){

	gsap.from(".tatuajes_2021", {x: 200, duration: 2, opacity: 0, ease: "expo"});
};

function tatuajes_2020(){

	gsap.from(".tatuajes_2020", {x: 200, duration: 2, opacity: 0, ease: "expo"});
};