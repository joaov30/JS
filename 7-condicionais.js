console.log(`Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDestinos);

//  if (idadeComprador >= 18) {

//   console.log("Comprador maior de Idade");
//  listaDestinos.splice(1, 1); //removendo item

//    } else if (estaAcompanhada == true) {

//   console.log("Comprador esta acompanhado");
// listaDestinos.splice(1, 1); //removendo item

//} else {

//    console.log("Comprador é menor de idade não será possivel realizar a compra");

//}

//console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Boa Viagem");
    listaDestinos.splice(1, 1); //removendo item


} else {

    console.log("Comprador é menor de idade não será possivel realizar a compra");

}

console.log("Emabarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){

    console.log("Boa Viagem");

}else{

    console.log("Você não pode embarcar");

}

console.log(listaDestinos);

//console.log(idadeComprador > 18);
//console.log(idadeComprador < 18);
//console.log(idadeComprador <= 18);
//console.log(idadeComprador >= 18);
//console.log(idadeComprador == 18);



