//capturamos todos los botones
const buttons = document.querySelectorAll('button');
//capturamos la clase screen (es la pantalla donde salen los numeros)
const screenDisplay = document.querySelector('.screen');

let calculation = []; // acumulamos los ingresos de caracteres
let acumulativeCalculation //

// callback para calculo de la operacion
function calculate (button) {
    const value = button.textContent //value es el contendio de cada boton

    // aca condicionamos que si el valor del boton es CLEAR, se limpia el array de ingresos y se muestra el screen el .
    if(value === 'CLEAR'){
        calculation = []
        screenDisplay.textContent = ''
    } else if (value === '='){ //en cambio, si se pulsa el igual, el metodo eval() realiza la operacion con los caracteres del array
        screenDisplay.textContent = eval(acumulativeCalculation)
    } else { //aca pasamos cada valor ingresado a calculation[], luego lo unimos para sacar las , con el join, y vamos mostrando por pantalla el acumulado de valor tras valor
        calculation.push(value);
        acumulativeCalculation = calculation.join('')
        screenDisplay.textContent = acumulativeCalculation
    }    
}

// por cada boton, donde se hace click, ejecutamos el callback.
buttons.forEach(button => {button.addEventListener('click',() => calculate(button))})