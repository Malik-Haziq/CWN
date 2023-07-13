const userEmails = [];
const form = document.querySelector(".secondary-cta form");
const secondaryModal = document.querySelector("section:has(.overlay)");
const secondaryModalCross = document.querySelector(".thanks-msg img");
const secondaryModalOverlay = document.querySelector(".overlay");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  userEmails.push(e.target.input.value);

  secondaryModal.classList.remove("hidden");
});

secondaryModalCross.addEventListener("click", () => {
  secondaryModal.classList.add("hidden");
});

secondaryModalOverlay.addEventListener("click", () => {
  secondaryModal.classList.add("hidden");
});
