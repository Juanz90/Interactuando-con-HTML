let titulo  = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';



function consoleButton(){
    alert('El botón fue clicado');
}

function promptButton() {
   let ciudad = prompt('Escriba una ciudad de Brasil: ');
    alert(`"Estuve en ${ciudad} y me acordé de ti".`);
}

function alertButton(){
    alert('Yo amo JS');
}

function sumaButton(){
    let numero1 = parseInt(prompt('ingrese un primer número para la suma: '));
    let numero2 = parseInt(prompt('Ingrese un segundo número para la suma: '));
    let suma = (numero1 + numero2);
    alert(`La suma de ambos numeros es: ${suma} `);
}