// 7. Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log.
// Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo:
// document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de object.propiedad2 por hora!`)


var auto = { 
    marca: "Toyota", 
    modelo: "Corolla", 
    año: 2022, 
    color: "Rojo", 
    motor: "1.8L", 
    velocidadMaxima: 180, 
    tipoCombustible: "Gasolina", 
    transmision: "Automática" }; 
    console.log(auto); 
    document.write(`El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado, alcanzando una velocidad de ${auto.velocidadMaxima} km/h!`);