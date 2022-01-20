console.log("main.js loaded");

// Modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Convert Celcsius to Fahrenheit

const celcToFahr = document.querySelector("celciusToFahrenheit");
const celsius = document.querySelector("toCelsius");
const fahrenheit = document.querySelector("toFahrenheit");

celcToFahr.addEventListener("click", function() {
  let celsius = document.getElementById("toCelcius").value;
  let fahrenheit = ((9/5) * c) + 32;
  document.getElementById("toFahrenheit").value = f;
})