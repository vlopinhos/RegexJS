const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";
const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while(contador<3) {
    
    if(listaDeDestinos[contador] == destino) {

        destinoExiste = true;
        break;
    }else {

        destinoExiste = false;
    }

    contador++;
}

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!");
}else {
    console.log("Error!")
}