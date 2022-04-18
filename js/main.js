let txtPalabraAdivinar = document.querySelector("#palabra-adivinar");
let btnJugar = document.querySelector("#boton-jugar");
let divPalabraOculta = document.querySelector("#palabra-oculta");
let btnsLetras =  document.querySelectorAll(".abecedario");
let palabraEscondida = "";
let totalErrores = 0;
btnJugar.addEventListener("click", jugar);
//ejecuta la función intentarLetra una vez por cada elemento del array 
btnsLetras.forEach(btn => {
    btn.addEventListener("click", intentarLetra);
});

function jugar(){ 
    while (divPalabraOculta.firstChild) {
        divPalabraOculta.removeChild(divPalabraOculta.firstChild);
    }
    totalErrores = 0;
    document.querySelector(".img-div").className = "img-div";
    palabraEscondida = txtPalabraAdivinar.value.toUpperCase();
    txtPalabraAdivinar.value = "";
    for (let index = 0; index <palabraEscondida.length; index++) {
        let label = document.createElement("label");
        label.innerHTML = "X";
        label.classList.add("letra-oculta");
        divPalabraOculta.appendChild(label);
            
    }
} 

function intentarLetra(event){ 
    let letra = event.target.innerText;
    let intento = 6;
    let index = buscarLetras(palabraEscondida, letra);
    if(index == -1){
        totalErrores = totalErrores + 1;
        intento = intento - totalErrores;
        alert('Numero de intentos que te quedan:'+ intento);    
        document.querySelector(".img-div").classList.add("img-div-"+totalErrores);
        if(totalErrores == 6) {
            alert("Perdiste");
        }
        return;
    }
    while (index > -1 ) {
        
        let lblOcultos = document.querySelectorAll(".letra-oculta");
        lblOcultos[index].innerHTML = letra;
        lblOcultos[index].classList.add("letra-adivinada");  
        let restoPalabra = palabraEscondida.substring(index+1);
        let indexTmp = buscarLetras(restoPalabra, letra);
        if (indexTmp>-1){
            index = indexTmp + index + 1; 
        } else {
            index = -1;
        } 
    }
    let lblAdivinadas = document.querySelectorAll(".letra-adivinada");
    if(lblAdivinadas.length == palabraEscondida.length) {
        alert("ganaste")
    }
}
function buscarLetras(palabra, letra){
   
    //retorna la posicion en la que encontro a la letra dentro de la palabra, si no la encuentra retorna un valor de -1
    return palabra.indexOf(letra);   

}
function estadoBoton(boton) {
    boton.disabled = true; 
}