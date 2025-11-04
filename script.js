let sonidoportada = document.getElementById("portada");

let letricaportada = document.getElementById("titulo");



letricaportada.onclick = function (){
  sonidoportada.currentTime = 0;
  sonidoportada.play();
}