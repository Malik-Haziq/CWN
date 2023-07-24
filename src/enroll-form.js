const enrollmentForm = document.querySelector("#enrollment-form");
const enrollmentInputFields = document.querySelectorAll(
  "#enrollment-form input, #enrollment-form select"
);

let formData = [];
let dataArr = [];
enrollmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs = enrollmentInputFields.forEach((field, i) => {
    formData.push({ [`${field.dataset.name}`]: field.value });
  });

  const singleObject = formData.reduce((accumulator, currentObject) => {
    return { ...accumulator, ...currentObject };
  }, {});
  dataArr.push(singleObject);
  console.log(dataArr);
});
