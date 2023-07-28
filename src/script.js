const userEmails = [];

const notifyForm = document.querySelector(".secondary-cta form");
const notifyInput = document.querySelector(".secondary-cta form input");
const notifyModal = document.querySelector("section:has(.overlay)");
const notifyModalCross = document.querySelector(".thanks-msg img");
const notifyModalOverlay = document.querySelector(".overlay");

const skillName = document.querySelector(".skill-name");

// --------- Events

notifyForm.addEventListener("submit", (e) => {
  onFormSubmit(e);
  notifyInput.value = "";
});
notifyModalCross.addEventListener("click", () => {
  notifyModal.classList.add("hidden");
});

notifyModalOverlay.addEventListener("click", () => {
  notifyModal.classList.add("hidden");
});

// -----------------  Functions
// Notify Form
const onFormSubmit = function (e) {
  e.preventDefault();

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(e.target.input.value.trim())) {
    notifyModal.classList.remove("hidden");
  } else {
    alert("please enter correct email");
  }

  userEmails.push(e.target.input.value);
};

// =====================  Language Names animation
const skillNamesArr = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Programming",
  "Coding",
];
