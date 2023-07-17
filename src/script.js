const userEmails = [];
const notifyForm = document.querySelector(".secondary-cta form");
const notifyModal = document.querySelector("section:has(.overlay)");
const notifyModalCross = document.querySelector(".thanks-msg img");
const notifyModalOverlay = document.querySelector(".overlay");

// --------- Events

form.addEventListener("submit", (e) => {
  onFormSubmit(e);
});

notifyModalCross.addEventListener("click", () => {
  notifyModal.classList.add("hidden");
});

notifyModalOverlay.addEventListener("click", () => {
  notifyModal.classList.add("hidden");
});

console.log(userEmails);

// -----------------  Functions
// Notify Form
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

// Form
