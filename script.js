const optIcon = document.getElementById("opt-icon");
const optDiv = document.querySelector(".opt-container");
const btns = document.querySelectorAll(".opt-btn")
const blur = document.querySelector(".container")
const foto = document.getElementById("foto-de-perfil")

foto.addEventListener("click", function () {
 if (foto.src.includes("Andre.png")) {
  foto.src = "./image/Andre2.png";
 } else {
  foto.src = "./image/Andre.png";
 }
});

optIcon.addEventListener("click", function () {
 menu()
})

btns.forEach(function (btn) {
 btn.addEventListener("click", function () {
  menu()
 })
})

function menu() {
 optDiv.classList.toggle('disabled')
 blur.classList.toggle('blur')
}