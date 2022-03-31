let txtPalabraAdivinar = document.querySelector("#palabra-adivinar");
let btnJugar = document.querySelector("#boton-jugar");
let divPalabraOculta = document.querySelector("#palabra-oculta");
let palabraEscondida = "";

btnJugar.addEventListener("click", jugar); 

function jugar(){ 
    palabraEscondida = txtPalabraAdivinar.value;
    txtPalabraAdivinar.value = "";
    for (let index = 0; index < palabraEscondida.length; index++) {
        let label = document.createElement("label"); 
        label.innerHTML = "X"; 
        label.classList.add("letra-oculta");
        divPalabraOculta.appendChild(label); 
        
    }
}