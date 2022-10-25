var player = "papel";
var pc = "papel";
var resultado;

function ganador () {

if (player === pc) {
    return resultado = "Empate";
} else if ((player == "papel"  && pc == "piedra") || (player == "piedra" && pc == "tijera") || (player == "tijera" && pc == "papel")) {
    return resultado = "gana player";
}else if ((pc == "papel"  && player == "piedra") || (pc == "piedra" && player == "tijera") || (pc == "tijera" && player == "papel")) {
    return resultado = "gana pc";
}else {
    return resultado = "ingrese datos correctos";
}
}

console.log(ganador());