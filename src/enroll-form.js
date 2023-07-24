const enrollmentForm = document.querySelector("#enrollment-form");
const enrollmentInputFields = document.querySelectorAll(
  "#enrollment-form input, #enrollment-form select"
);
let inputs = [];
let obj = [];

enrollmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs = enrollmentInputFields.forEach((field, i) => {
    obj = { [`${field.dataset.name}`]: field.value };
    inputs.push(obj);
  });
  for (let i = 0; i < inputs.length; i++) {
    Object.assign(inputs, inputs[i]);
  }
  console.log(inputs);
});

// function handleSubmit(event) {
//   event.preventDefault(); // Prevent form submission (we'll handle it)

//   // Get the form element
// const form = event.target;
// const formData = new FormData(form); // Create a FormData object to get form values
// console.log(formData);
// // Convert the FormData object to a plain JavaScript object
// const formValues = {};
// formData.forEach((value, name) => {
//   formValues[name] = value;
// });

//   // Now, you have an object with all the form values
//   console.log(formValues);

//   // If you want to do something else with the object, you can pass it to another function or process it here
//   // For example: sendDataToServer(formValues);
// }

// // Add an event listener to the form to call the handleSubmit function on form submission
// enrollmentForm.addEventListener("submit", handleSubmit);
