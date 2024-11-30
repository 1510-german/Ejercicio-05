// 3. Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. 
// Muestra el resultado de la operación en un alert.


var numero1 = prompt("Introduce el primer número");
if(numero1 === null) {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}
if(numero1 === "") {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}
var numero2 = prompt("Introduce el segundo número");
if(numero2 === null) {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}
if(numero2 === "") {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}
var operacion = prompt("Introduce la operación (+, -, *, /)");

if (operacion === "+") {
    var resultado = numero1 + numero2;
    alert("El resultado es:" + resultado)
} else if (operacion === "-") {
    var resultado = numero1 - numero2;
    alert("El resultado es:" + resultado)
} else if (operacion === "*") {
    var resultado = numero1 * numero2;
    alert("El resultado es:" + resultado)
} else if (operacion === "/") {
    var resultado = numero1 / numero2;
    alert("El resultado es:" + resultado)
} else {
    alert("OPERADOR NO VÁLIDO")
}

// NOTA: los return no me estan funcionando y cuando quiero hacer una suma me une los dos números.