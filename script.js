const button = document.getElementById('btnprimario');
const contador= document.getElementById('contador1');
const desbloqueo = document.getElementById('chckdes');
let suma = 0;


button.addEventListener("click", funcion)

function funcion(){


   if (suma <= 49 ){
    suma++;
   contador.innerText= suma;
   }

   if(contador.innerText >= 50){
    suma += 10;
    desbloqueo.innerText = "Has desbloqueado:"
    contador.innerText= suma;
   }
   
}