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

const fahrenheitButton = document.querySelector(".button.Fahrenheit");
const celciusButton = document.querySelector(".button.Celcius")
const fahrenheit = document.querySelector(".toFahrenheit");
const celcius = document.querySelector(".toCelcius");
const buttonSwitch = document.querySelector(".button-switch");
// berekent en schrijft hoeveel farenheit celcius is//  

if (buttonSwitch) {
  buttonSwitch.addEventListener("click", function() {
    const theBody = document.body;
    theBody.classList.toggle("background");
  })
}

if (fahrenheitButton) {
  fahrenheitButton.addEventListener("click", fahrenheitConverter);
  celciusButton.addEventListener("click", celciusConverter2);
}

function fahrenheitConverter() {
  const fahrenheitValue = fahrenheit.value;
  document.querySelector(".toCelcius").innerHTML=(fahrenheitValue-32)/1.8;
}

// berekent en schrijft hoeveel celcius farenheit is//
function celciusConverter2() {
  const celciusValue = celcius.value;
  document.querySelector(".toFahrenheit").innerHTML=(celciusValue*1.8)+32;
} 