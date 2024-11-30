// 6. Calcular el IVA de un producto
// Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.


var dolares = prompt("Ingrese el precio del producto en dolares");
var oneDolar = 1130;
var iva = 0.21;
var valorPesosSinIva = dolares * oneDolar;
var valorIva = valorPesosSinIva * iva;
var valorPesosFinal = valorPesosSinIva + valorIva;
var valorDolarFinal = valorPesosFinal / oneDolar;
alert("Precio total en USD" + " " + valorDolarFinal + " " + "Precio total en $" +" " + valorPesosFinal)