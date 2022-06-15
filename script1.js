const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
  const re = /\S+@\S+\.\S+/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

// check required

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

// get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check Passwords

function checkPasswords(input1, input2) {
  if (input1.value != input2.value) {
    // console.log("wrong passwords");
    showError(input2, "Passwords do not match.");
  }
}

// check length of inputs
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} cannot exceed ${max} characters.`);
  } else {
    showSuccess();
  }
}

// event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("E");
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 8, 20);
  checkEmail(email);
  checkPasswords(password, password2);
});
