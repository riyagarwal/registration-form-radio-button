let globalIsSubmitted = false

function validate(isSubmitted = false) {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("mobile-number").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let others = document.getElementById("others").checked;
  let country = document.getElementById("country").value;
  let error = false;

  if(isSubmitted) {
    globalIsSubmitted = true
  }

  if (globalIsSubmitted) {

    // first name validation
    if (firstName.length >= 3 && isNaN(firstName)) {
      document.getElementById("first-name-invalid").style.display = "none";
      
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      error = true;
    }

    // last name validation
    if (lastName.length >= 3 && isNaN(lastName)) {
      document.getElementById("last-name-invalid").style.display = "none";
      
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      error = true;
    }

    // email validation
    let n = email.length;
    let lastIdxOfDot = email.lastIndexOf(".");
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      n - lastIdxOfDot < 3 ||
      n - lastIdxOfDot > 4 ||
      email[0] === "@"
    ) {
      document.getElementById("email-invalid").style.display = "block";
      error = true;
    } else {
      document.getElementById("email-invalid").style.display = "none";
    }

    // Phone number validation
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      document.getElementById("mobile-invalid").style.display = "block";
      error = true;
    } else {
      document.getElementById("mobile-invalid").style.display = "none";
    }

    // Gender verification
    if (male || female || others) {
      document.getElementById("gender-invalid").style.display = "none";
    } else {
      document.getElementById("gender-invalid").style.display = "block";
      error = true;
    }

    // Country validation
    if (country === "") {
      document.getElementById("country-invalid").style.display = "block";
      error = true;
    } else {
      document.getElementById("country-invalid").style.display = "none";
    }

    // Submit button
    if (error === false) {
      window.alert("Your details have been saved successfully!");
      document.getElementById("registration-form").reset();
    }
  }
}
