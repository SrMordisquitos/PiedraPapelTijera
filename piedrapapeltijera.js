let tijera = 1;
let papel = 2;
let piedra = 3;
let cpu;
var random = Math.ceil(Math.random() *3)


if (random === 1){
    cpu = "tijera";
} else if (random === 2) {
    cpu = "papel";
} else {
    cpu = "piedra";
}

let eleccion = prompt("Cual eliges: Piedra, Papel o Tijera");

if (eleccion == "piedra"){
    console.log("Elegiste Piedra mientras el cpu eligio "+ cpu);
} else if (eleccion == "papel"){
    console.log("Elegiste Papel mientras el cpu eligio "+ cpu);
} else if (eleccion == "tijera"){
    console.log("Elegiste Tijera mientras el cpu eligio "+ cpu);
}
