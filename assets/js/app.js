const form = document.querySelector("form")
const phoneNumber = document.getElementById("PhoneNumber")
const email = document.getElementById("email");
const radios=document.querySelectorAll("input[name=gender]");



form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  console.log("Form submitted");
  console.log("Email: ", email.value);

  let generalIquiry = "";
  radios.forEach((radio) => {
    if (radio.checked) { //checked user here
      generalIquiry = radio.value;

    }
  });
  console.log("Gender: ", generalIquiry);
});

phoneNumber.addEventListener("keydown",function(event){
    const key=event.key;

    if (!(isNumber(key) || isBs(key))) {
    event.preventDefault(); // Prevent non-numeric input
    error.textContent = "Please enter only numbers";
  } else {
    error.textContent = "";
  }
});

function isNumber(key) {
  return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(key);
}

function isBs(key) {
  return key === "Backspace";
}