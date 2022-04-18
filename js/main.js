let txtPalabraAdivinar = document.querySelector("#palabra-adivinar");
let btnJugar = document.querySelector("#boton-jugar");
let divPalabraOculta = document.querySelector("#palabra-oculta");
let btnsLetras =  document.querySelectorAll(".abecedario");
let palabraEscondida = "";
let totalErrores = 0;
btnJugar.addEventListener("click", jugar); 
btnsLetras.forEach(btn => {
    btn.addEventListener("click", intentarLetra);
});

function inicializarJuego(){
    let elems = document.querySelectorAll(".abecedario");
    for(let i = 0; i < elems.length; i++){
        elems[i].disabled = false;
    }
    while (divPalabraOculta.firstChild) {
        divPalabraOculta.removeChild(divPalabraOculta.firstChild);
    }
    totalErrores = 0;
    document.querySelector(".img-div").className = "img-div";
}

function pintarPalabraEscondida(){
    for (let index = 0; index <palabraEscondida.length; index++) {
        let label = document.createElement("label");
        label.innerHTML = "X";
        label.classList.add("letra-oculta");
        divPalabraOculta.appendChild(label);    
    }  
}

function jugar(){ 
    inicializarJuego();
    palabraEscondida = txtPalabraAdivinar.value.toUpperCase();
    txtPalabraAdivinar.value = "";
    pintarPalabraEscondida();
} 


function intentarLetra(event){ 
    let letra = event.target.innerText;
    event.target.disabled = true;
    let index = buscarLetras(palabraEscondida, letra);
    if(index == -1){
        totalErrores = totalErrores + 1;
        alert(`Error ${totalErrores} de 6 oportunidades`);
        //alert("Error " +totalErrores+ " de 6 oportunidades");
        document.querySelector(".img-div").classList.add("img-div-"+totalErrores);
        if(totalErrores == 6) {
            alert("Callo el Peje");
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
    return palabra.indexOf(letra);
}