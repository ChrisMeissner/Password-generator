function generatePassword() {
    var complexity = window.prompt("How many characters would you like in your password? Choose between 8 and 123"); {
      console.log(complexity)
    }
  
    var values = "";
  
    if (!complexity) {
      window.alert("This needs a value");
    } 
    else if (complexity < 8 || complexity > 123) {
      window.prompt("You must choose between 8 and 123");
    } 
    else {
      var confirmLowercaseCharacters = confirm("Will this contain lowercase characters?");
      var confirmUppercaseCharacters = confirm("Will this contain uppercase characters?");
      var confirmNumericalCharacters = confirm("Will this contain numerical characters?");
      var confirmSpecialCharacters = confirm("Will this contain special characters?");
    };
  
    if (!confirmLowercaseCharacters && !confirmUppercaseCharacters && !confirmNumericalCharacters && !confirmSpecialCharacters) {
      values = window.alert("You must include at least one type of character.");
    }
    else if (confirmLowercaseCharacters && confirmUppercaseCharacters && confirmNumericalCharacters&& confirmSpecialCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"];
    }
    else if (confirmLowercaseCharacters && confirmUppercaseCharacters && confirmNumericalCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"];
    }
    else if (confirmLowercaseCharacters && confirmNumericalCharacters && confirmSpecialCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"];
    }
    else if (confirmUppercaseCharacters && confirmNumericalCharacters && confirmSpecialCharacters) {
      values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"];
    }
    else if (confirmLowercaseCharacters && confirmUppercaseCharacters && confirmSpecialCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+"]
    }
    else if (confirmLowercaseCharacters && confirmUppercaseCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    }
    else if (confirmUppercaseCharacters && confirmNumericalCharacters) {
      values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"];
    }
    else if (confirmNumericalCharacters && confirmSpecialCharacters) {
      values = ["1234567890!@#$%^&*()_+"];
    }
    else if (confirmSpecialCharacters && confirmLowercaseCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"];
    }
    else if (confirmLowercaseCharacters && confirmNumericalCharacters) {
      values = ["abcdefghijklmnopqrstuvwxyz1234567890"];
    }
    else if (confirmUppercaseCharacters && confirmSpecialCharacters) {
      values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+"];
    }
    else if (confirmLowercaseCharacters) {
      values = "abcdefghijklmnopqrstuvwxyz";
    }
    else if (confirmUppercaseCharacters) {
      values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else if (confirmNumericalCharacters) {
      values = "1234567890";
    }
    else if (confirmSpecialCharacters) {
      values = "!@#$%^&*()_+";
    };
  
    var password = [];
  
    for (var i = 0; i <= complexity; i++) {
      var results = values[Math.floor(Math.random()) * values.length - 1];
    }
    document.getElementById("password").values = results
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  generatePassword();