console.log(`Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);


const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis: ");
console.log(listaDestinos);

if (idadeComprador >= 18) {

    console.log("Comprador maior de Idade");
    listaDestinos.splice(1, 1); //removendo item

} else if (estaAcompanhada) {

    console.log("Comprador esta acompanhado");
    listaDestinos.splice(1, 1); //removendo item

} else {

    console.log("Comprador é menor de idade não será possivel realizar a compra");

}

console.log(listaDestinos);

//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);



