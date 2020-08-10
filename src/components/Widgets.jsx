import React from 'react'
const mascotas = [
    {
        nombre: 'firu', 
        edad: 4,
        raza: 'pastor',
        tipo: 'perro'
    },
    {
        nombre: 'toby', 
        edad: 6,
        raza: 'yorky',
        tipo: 'perro'
    },
    {
        nombre: 'pancho', 
        edad: 3,
        raza: 'doberman',
        tipo: 'perro'
    },
    {
        nombre: 'vodka', 
        edad: 5,
        raza: 'husky',
        tipo: 'gato'
    },
];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Metodo '.filter()' retorna un array nuevo con los objetos seleccionados true por la funcion()
let numerosFiltrados = numeros.filter(x => x >= 7);



// metodo '.map' retorna un array nuevo con todos los elementos del array antiguo atravezados por la funcion()
// multiplicacion de todos los numeros del array usando .map
let numerosMapeados = numeros.map(x => x *2);
let parejas = numeros.map(x => [x, x]);
let edades = mascotas.map(x => x.edad);
let filtroPerrosJovenes = edades.filter(x => x < 5);
let perrosJovenes = JSON.stringify(mascotas.filter(x => x.edad < 5));
// metodo '.reducer()' retorna la sumatoria de todos los elementos de un array acumulando (acc) la suma dede uno mas otro partiendo desde el valor inicial acc + num o elemento, 0 o [] o {}
let reduciendoNumeros = numeros.reduce((acc, num) => acc + num, 0)
function Widgets() {
    console.log(reduciendoNumeros);
    console.log(perrosJovenes);
    return (
        <div>
            
    <h1>{parejas}<br/>{perrosJovenes} {reduciendoNumeros}<br/>{numeros} {numerosMapeados}<br/> {numerosFiltrados}</h1>
        </div>
    )
}

export default Widgets;
