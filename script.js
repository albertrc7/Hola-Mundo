const contador= document.getElementById('contador1');
const desbloqueo = document.getElementById('chckdes');
const desbloqueo2 = document.getElementById('chckdes2');
const imagendes = document.getElementById('imagen2');
let suma = 0;


button.addEventListener("click", funcion)

function funcion(){


   if (suma <= 49 ){
    suma++;
   contador.innerText= suma;
   }

   if(contador.innerText >= 50 && contador.innerText <= 190){
    suma += 10;
    desbloqueo.innerText = "Has desbloqueado:"
    contador.innerText= suma;
    imagendes.src = '/img/desbloqueo.jpg'
   }

   if (contador.innerText >= 200){
      suma += 100
      desbloqueo2.innerText = "Has desbloqueado:"
      contador.innerText = suma;
   }
   
}