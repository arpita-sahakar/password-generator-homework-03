// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate password based on user criteria

function generatePassword() {

  //  Ask questions to the user.
  //  Criteria present :
  //   1.length 2. character types
  //  Prompt user for length, min - 8 characters & max - 128 characters & validate length.

  var passwordLength;
  // do {
  //   passwordLength = prompt(
  //     "Please enter the length of the password, character should between 8 to 128."
  //   );
  //   console.log("length entered is " + passwordLength);
  //   console.log("Is input entered not a number " + isNaN(passwordLength));
  //   if (isNaN(passwordLength) === true) {
  //     alert("It is not a number");
  //   }
  //   console.log(passwordLength<8 || passwordLength>128);
  //   if (passwordLength<8 || passwordLength>128){
  //     alert("length does not meet the required criteria");
  //   }
  // }
  // while (isNaN(passwordLength) === true || (passwordLength<8 || passwordLength>128));


  while (isNaN(passwordLength) === true || (passwordLength<8 || passwordLength>128)) {
     passwordLength = prompt(
      "Please enter the length of the password, character should between 8 to 128."
    );
    console.log("length entered is " + passwordLength);
    console.log("Is input entered not a number " + isNaN(passwordLength));
    if (isNaN(passwordLength) === true) {
      alert("It is not a number");
    }
    if (passwordLength<8 || passwordLength>128){
      alert("length does not meet the required criteria");
    }
  }


  //  Validate
  //  Generate passWord as per given criteria

  return "hello world";
}
