// 5. Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.


var minutos = parseInt(prompt("Ingrese un número en minutos"));
if(minutos === null) {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}
if(minutos === "") {
    alert("NO INGRESASTE NINGÚN NÚMERO");
    // return;
}

var segundos = minutos * 60;
var hora = minutos / 60;

alert("Ingresaste" + " " + minutos + " " + "minutos que son" + " " + segundos + " " + "segundos y a su vez son" + " " + hora + " " + "horas")

