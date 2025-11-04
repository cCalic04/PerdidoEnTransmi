
let Audio1 = document.getElementById("AudioJuan");

let Audio2 = document.getElementById("AudioSilverio");

let Audio3 = document.getElementById("AudioLucia");

let Audio4 = document.getElementById("AudioClaudia");

let Audio5 = document.getElementById("AudioHector");

let Audio6 = document.getElementById("AudioAmbiente");

let Imagen1 = document.getElementById("Juan");

let Imagen2 = document.getElementById("DonSilverio");

let Imagen3 = document.getElementById("Lucia");

let Imagen4 = document.getElementById("Claudia");

let Imagen5 = document.getElementById("Hector");

let Fondo = document.getElementById("contenedor");

Imagen1.onclick = function () {
  Audio1.currentTime = 0;
  Audio1.play();
};
Imagen2.onclick = function () {
  Audio2.currentTime = 0;
  Audio2.play();
};
Imagen2.onclick = function () {
  Audio2.currentTime = 0;
  Audio2.play();
};
Imagen3.onclick = function () {
  Audio3.currentTime = 0;
  Audio3.play();
};
Imagen4.onclick = function () {
  Audio4.currentTime = 0;
  Audio4.play();
};
Imagen5.onclick = function () {
  Audio5.currentTime = 0;
  Audio5.play();
};
Fondo.onclick = function () {
  Audio6.currentTime = 0;
  Audio6.play();
};




const texto = document.getElementById("interaccion");
const textoBio = document.getElementById("biografia");
const texto1J = document.getElementById("interaccion1J");
const texto1S = document.getElementById("interaccion1S");
const texto1L = document.getElementById("interaccion1L");
const texto1C = document.getElementById("interaccion1C");
const texto1H = document.getElementById("interaccion1H");

const textoRellenoJuan = {
  Juan: "Ese man se ve re perdido. No creo que sepa en dónde estamos.",
};

const textoRellenoSilverio = {
  DonSilverio:
    "Nadie le para bolas a ese viejito. Igual se le ve contento... ¿Qué será lo que vende?",
};

const textoRellenoLucia = {
  Lucia: "¿Una niña devolviendose del colegio a esta hora? Tan raro.",
};

const textoRellenoClaudia = {
  Claudia: "¿Qué es la griteria de esa señora? Parece una llamada mamona.",
};

const textoRellenoHector = {
  Hector: "Un polícia leyendo. Nunca había visto algo así.",
};

const interact1Juan = {
  Juan: "Escucharlo (click)",
};

const interact1Silverio = {
  DonSilverio: "Hablarle (click)",
};

const interact1Lucia = {
  Lucia: "Escucharla (click)",
};

const interact1Claudia = {
  Claudia: "Chismosear la llamada (click)",
};

const interact1Hector = {
  Hector: "Hablarle (click)",
};

const textoRelleno1Juan = {
  Juan: " —La próxima vez que me quede dormido terminaré en San Mateo, de pronto es el sueño pero me siento como… más liviano. ¿Será que sí está pasando el H72?",
};

const textoRelleno1Silverio = {
  DonSilverio:
    " —Poemas para la juventud enamorada. ¡Ahora no hay amor! ¡Tráiganlo de vuelta! ¡Lean!",
};

const textoRelleno1Lucia = {
  Lucia:
    " —No debí irme así. O, no lo sé. Lo importante es que ya puedo regresar a casa y de pronto alcanzo a llegar antes que mi papá, espero que asuma que estuve en mi habitación toda la tarde.",
};

const textoRelleno1Claudia = {
  Claudia:
    " —Dios, por favor hemos discutido el mismo tema 5 veces hoy y hemos llegado a la misma conclusión. Si tienes alguna duda, puedes discutirla con el Jefe porque yo la verdad ya estoy harta. ¡Nuestro turno terminó hace seis horas!.",
};

const textoRelleno1Hector = {
  Hector:
    " —Oíga joven, ¿usted entiende esto? 'De aparecer apareció. Pero en una lista de desaparecidos'. Sale en este libro que me regalaron, de un tal Nicanor Parra. Yo no entiendo ni chimba.",
};

/* acá en estas biografías intentamos colocarle color diferente a los titulos usando <span style='color: red'> </span> pero no funcionó, osea, como que funcionaba para una sola línea y si intentabamos colocarlo en varias líneas se anulaba el <br> y entonces ya no quedaba como una lista. En otras palabras fallecimos colocandole el color*/

const textoBioJuan = {
  Juan: "Biografía<br> Nombre: Juan<br>Edad: 24 años<br>Ocupación: Estudiante universitario<br>Estado Sentimental: En un casi algo.<br>Secreto: Le tiene miedo a las polillas.<br>Color favorito: Morado.<br>Juan no duerme más de 4 horas en la noche y, al parecer prefiere la suavidad de una silla roja, sucia y tiesa de un Transmilenio que la de su propia almohada..",
};

const textoBioSilverio = {
  DonSilverio: "Biografía<br> Nombre: Don Silverio.<br> Edad: 68 años.<br> Ocupación: Vendedor ambulante.<br> Estado Sentimental: Viudo.<br> Secreto: Estuvo muy cerca de ganar un nobel de literatura.<br>  Color favorito: Amarillo.<br> Don Silverio podrá verse decadente, pero jamás dejará de hacer su mejor esfuerzo por vestirse elegante. A su esposa le encantaba verlo de traje y ahora, ya que no puede hablar de amor con ella, vende su poesía ante un mundo que parece no apreciarla.",
};

const textoBioLucia = {
  Lucia: "Biografía<br> Nombre: Lucía<br> Edad: 16 años<br> Ocupación: Estudiante de secundaria.<br> Estado Sentimental: Jamás ha tenido pareja.<br> Secreto: Es una persona totalmente diferente ante los ojos de sus padres.<br> Color favorito: Naranja<br> A Lucía le duele dejar la idea de ser una niña. Le pesa su adolescencia y lo que implica crecer, por ello vaga por la ciudad recorriendo los lugares que frecuentaba cuando era más jóven. Lucía siempre llega tarde a su casa y se excusa en las actividades extracurriculares",
};

const textoBioClaudia = {
  Claudia: "Biografía<br> Nombre: Claudia<br> Edad: 40 años.<br> Ocupación: Empleada de telecomunicaciones.<br> Estado Sentimental: Casado.<br> Secreto: No necesita gafas pero las utiliza para verse más inteligente.<br> Color favorito: Fucsia.<br> Claudia es una mujer que sabe lo que quiere y cómo conseguirlo, le apasiona profundamente su trabajo. Sin embargo, detesta a sus compañeros, le cuesta tener conversaciones casuales y por ello se siente muy sola cuando está fuera de casa.",
};

const textoBioHector = {
  Hector: "Biografía<br> Nombre: Hector<br> Edad: 51 años.<br> Ocupación: Policía.<br> Estado Sentimental: Soltero.<br> Secreto: Su sueño siempre fue ser cantante de bachata.<br> Color favorito: Verde o amarillo Fosforescente.<br> Héctor no es una mala persona, solo es muy ahuevado. Cuando se da cuenta de que hay robos en estaciones siempre es demasiado tarde y su estado físico no le permite perseguir a los ladrones. Le gusta leer para escapar la realidad de ser tombo.",
};

function actualizarTextoBioJ(event) {
  textoBio.innerHTML = textoBioJuan[event.target.id] || "...";
}

function actualizarTextoBioS(event) {
  textoBio.innerHTML = textoBioSilverio[event.target.id] || "...";
}

function actualizarTextoBioL(event) {
  textoBio.innerHTML = textoBioLucia[event.target.id] || "...";
}

function actualizarTextoBioC(event) {
  textoBio.innerHTML = textoBioClaudia[event.target.id] || "...";
}

function actualizarTextoBioH(event) {
  textoBio.innerHTML = textoBioHector[event.target.id] || "...";
}

function actualizarTextoJ(event) {
  texto.innerHTML = textoRellenoJuan[event.target.id] || "Mirar alrededor";
}
function actualizarTextoS(event) {
  texto.innerHTML = textoRellenoSilverio[event.target.id] || "Mirar alrededor";
}

function actualizarTextoL(event) {
  texto.innerHTML = textoRellenoLucia[event.target.id] || "Mirar alrededor";
}

function actualizarTextoC(event) {
  texto.innerHTML = textoRellenoClaudia[event.target.id] || "Mirar alrededor";
}

function actualizarTextoH(event) {
  texto.innerHTML = textoRellenoHector[event.target.id] || "Mirar alrededor";
}

function actualizarTexto1J(event) {
  texto1J.innerHTML = interact1Juan[event.target.id] || "...";
}

function actualizarTexto1S(event) {
  texto1S.innerHTML = interact1Silverio[event.target.id] || "...";
}

function actualizarTexto1L(event) {
  texto1L.innerHTML = interact1Lucia[event.target.id] || "...";
}

function actualizarTexto1C(event) {
  texto1C.innerHTML = interact1Claudia[event.target.id] || "...";
}

function actualizarTexto1H(event) {
  texto1H.innerHTML = interact1Hector[event.target.id] || "...";
}

function actualizarTexto2J(event) {
  texto1J.innerHTML = textoRelleno1Juan[event.target.id] || "...";
}

function actualizarTexto2S(event) {
  texto1S.innerHTML = textoRelleno1Silverio[event.target.id] || "...";
}

function actualizarTexto2L(event) {
  texto1L.innerHTML = textoRelleno1Lucia[event.target.id] || "...";
}

function actualizarTexto2C(event) {
  texto1C.innerHTML = textoRelleno1Claudia[event.target.id] || "...";
}

function actualizarTexto2H(event) {
  texto1H.innerHTML = textoRelleno1Hector[event.target.id] || "...";
}

function resetTextoBio() {
  textoBio.innerHTML = "...";
}

function resetTexto() {
  texto.innerHTML = "Mirar alrededor";
}

function resetTexto1J() {
  texto1J.innerHTML = "...";
}

function resetTexto1S() {
  texto1S.innerHTML = "...";
}

function resetTexto1L() {
  texto1L.innerHTML = "...";
}

function resetTexto1C() {
  texto1C.innerHTML = "...";
}

function resetTexto1H() {
  texto1H.innerHTML = "...";
}

document.getElementById("Juan").addEventListener("mouseover", actualizarTextoJ);
document.getElementById("Juan").addEventListener("mouseout", resetTexto);
document
  .getElementById("Juan")
  .addEventListener("mouseover", actualizarTexto1J);
document.getElementById("Juan").addEventListener("mouseout", resetTexto1J);
document.getElementById("Juan").addEventListener("click", actualizarTexto2J);
document.getElementById("Juan").addEventListener("mouseover", actualizarTextoBioJ);
document.getElementById("Juan").addEventListener("mouseout", resetTextoBio);

document
  .getElementById("DonSilverio")
  .addEventListener("mouseover", actualizarTextoS);
document.getElementById("DonSilverio").addEventListener("mouseout", resetTexto);
document
  .getElementById("DonSilverio")
  .addEventListener("mouseover", actualizarTexto1S);
document
  .getElementById("DonSilverio")
  .addEventListener("mouseout", resetTexto1S);
document
  .getElementById("DonSilverio")
  .addEventListener("click", actualizarTexto2S);
document.getElementById("DonSilverio").addEventListener("mouseover", actualizarTextoBioS);
document.getElementById("DonSilverio").addEventListener("mouseout", resetTextoBio);


document
  .getElementById("Lucia")
  .addEventListener("mouseover", actualizarTextoL);
document.getElementById("Lucia").addEventListener("mouseout", resetTexto);
document
  .getElementById("Lucia")
  .addEventListener("mouseover", actualizarTexto1L);
document.getElementById("Lucia").addEventListener("mouseout", resetTexto1L);
document.getElementById("Lucia").addEventListener("click", actualizarTexto2L);
document.getElementById("Lucia").addEventListener("mouseover", actualizarTextoBioL);
document.getElementById("Lucia").addEventListener("mouseout", resetTextoBio);

document
  .getElementById("Claudia")
  .addEventListener("mouseover", actualizarTextoC);
document.getElementById("Claudia").addEventListener("mouseout", resetTexto);
document
  .getElementById("Claudia")
  .addEventListener("mouseover", actualizarTexto1C);
document.getElementById("Claudia").addEventListener("mouseout", resetTexto1C);
document.getElementById("Claudia").addEventListener("click", actualizarTexto2C);
document.getElementById("Claudia").addEventListener("mouseover", actualizarTextoBioC);
document.getElementById("Claudia").addEventListener("mouseout", resetTextoBio);

document
  .getElementById("Hector")
  .addEventListener("mouseover", actualizarTextoH);
document.getElementById("Hector").addEventListener("mouseout", resetTexto);
document
  .getElementById("Hector")
  .addEventListener("mouseover", actualizarTexto1H);
document.getElementById("Hector").addEventListener("mouseout", resetTexto1H);
document.getElementById("Hector").addEventListener("click", actualizarTexto2H);
document.getElementById("Hector").addEventListener("mouseover", actualizarTextoBioH);
document.getElementById("Hector").addEventListener("mouseout", resetTextoBio);
