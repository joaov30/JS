console.log(` \n Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro"

console.log("\n Destinos possíveis: ");
console.log(listaDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    

    if(listaDestinos[contador] == destino){

        
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe : ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem")
}else{
    console.log("desculpe tivemos um erro!");
}

