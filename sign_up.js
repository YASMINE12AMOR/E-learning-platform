document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".signup form");
  
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const firstName = document.getElementById("Fname").value;
      const lastName = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      if (firstName && lastName && email && password) {
        alert("Sign-up successful! Welcome, " + firstName + " " + lastName);
        
        signUpForm.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  });