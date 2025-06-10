console.log("Radio en Vivo - ¡Conectado!");

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
  // Botón hamburguesa
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

// SLIDER AUTOMÁTICO
let index = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slider");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) { index = 1; }
  slides[index - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Cambia cada 5 segundos
}
showSlides();

// REPRODUCTOR
const playPauseBtn = document.getElementById("playPauseBtn");
const radioPlayer = document.getElementById("radioPlayer");
const status = document.getElementById("status");
const progresoBarra = document.getElementById("progresoBarra");

let animacionBarra;
let animando = false;

playPauseBtn.addEventListener("click", () => {
  if (radioPlayer.paused) {
    radioPlayer.play();
    playPauseBtn.textContent = "⏸";
    status.textContent = "En Vivo";
    iniciarAnimacionBarra();
  } else {
    radioPlayer.pause();
    playPauseBtn.textContent = "▶";
    status.textContent = "Pausado";
    detenerAnimacionBarra();
  }
});

function iniciarAnimacionBarra() {
  if (animando) return;
  animando = true;
  let width = 0;
  progresoBarra.style.width = '0%';

  animacionBarra = setInterval(() => {
    width += 1;
    if (width > 100) width = 0;
    progresoBarra.style.width = width + '%';
  }, 100);
}

function detenerAnimacionBarra() {
  clearInterval(animacionBarra);
  animando = false;
}

const ondasBarra = document.getElementById("ondasBarra");

function iniciarAnimacionBarra() {
  ondasBarra.style.display = "flex";
}

function detenerAnimacionBarra() {
  ondasBarra.style.display = "none";
}


// campo icono
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  const nombre = this.nombre;
  const email = this.email;
  const mensaje = this.mensaje;

  if (!nombre.value || !email.value || !mensaje.value || !email.validity.valid) {
    e.preventDefault();
    alert("Por favor completa correctamente todos los campos.");
  }
});
