var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"

function elGanadorEs (player, pc) {
    switch (true) {
        case player === pc :
            console.log("empate");
        break;
        case player == "piedra" && user == "tijera" :
            console.log("Gana player");
        break;
        case player == "tijera" && user == "papel" :
            console.log("Gana player");
        break;
        case player == "papel" && user == "piedra" :
            console.log("Gana player");
        break;
        default:
            console.log("Perdiste");
    }
    
}

 