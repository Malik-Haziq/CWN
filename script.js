const userEmails = [];
const form = document.querySelector(".secondary-cta form");
const secondaryModal = document.querySelector("section:has(.overlay)");
const secondaryModalCross = document.querySelector(".thanks-msg img");
const secondaryModalOverlay = document.querySelector(".overlay");

// --------- Events

form.addEventListener("submit", (e) => {
  onFormSubmit(e);
});

secondaryModalCross.addEventListener("click", () => {
  secondaryModal.classList.add("hidden");
});

secondaryModalOverlay.addEventListener("click", () => {
  secondaryModal.classList.add("hidden");
});

console.log(userEmails);

// -----------------  Functions
// Secondary Form
const onFormSubmit = function (e) {
  e.preventDefault();

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(e.target.input.value.trim())) {
    secondaryModal.classList.remove("hidden");
  } else {
    alert("please enter correct email");
  }

  userEmails.push(e.target.input.value);
};
