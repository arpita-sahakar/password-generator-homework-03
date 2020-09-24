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
  //  prompt user for length, min - 8 characters & max - 128 characters & validate length.

  var passwordLength;
  while (
    isNaN(passwordLength) === true ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    passwordLength = prompt(
      "Please enter the length of the password, character should between 8 to 128."
    );
    console.log("length entered is " + passwordLength);
    console.log("Is input entered not a number " + isNaN(passwordLength));
    if (isNaN(passwordLength) === true) {
      alert("It is not a number");
    }
    if (passwordLength < 8 || passwordLength > 128) {
      alert("length does not meet the required criteria");
    }
  }

  //prompt user for character type , at least one character type should be present -
  // u for upper case, n for number, s for special character. separated by comma

  do {
    var enterCriteria = prompt(
      "Please enter the character types to be included in the password :Press l for lower case , " +
        "u for upper case, n for number, s for special character. separated by comma"
    );
    console.log("The criterias are " + enterCriteria);

    var upperCaseIndex = enterCriteria.toLowerCase().indexOf("u");
    var lowerCaseIndex = enterCriteria.toLowerCase().indexOf("l");
    var numberIndex = enterCriteria.toLowerCase().indexOf("n");
    var specialCaseIndex = enterCriteria.toLowerCase().indexOf("s");

    if (
      upperCaseIndex === -1 &&
      lowerCaseIndex === -1 &&
      numberIndex === -1 &&
      specialCaseIndex === -1
    ) {
      alert("provide atleast one criteria");
    }
  } while (
    upperCaseIndex === -1 &&
    lowerCaseIndex === -1 &&
    numberIndex === -1 &&
    specialCaseIndex === -1
  );

  //  Generate passWord as per given criteria

  // count the number of criterion

  var numCrit = 0;
  // variable to hold default criteria
  var defaultCri = "";

  if (upperCaseIndex != -1) {
    defaultCri = "u";
    numCrit++;
  }
  if (lowerCaseIndex != -1) {
    defaultCri = "l";
    numCrit++;
  }
  if (numberIndex != -1) {
    defaultCri = "n";
    numCrit++;
  }
  if (specialCaseIndex != -1) {
    defaultCri = "s";
    numCrit++;
  }

  console.log("number of criterion present " + numCrit);

  var eachCritLen = Math.floor(passwordLength / numCrit);
  console.log("the length for each criteria is " + eachCritLen);

  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // initialize with empty string.
  var sysGenPass = "";
// generate password based on criteria
  if (upperCaseIndex != -1) {
    for (i = 0; i < eachCritLen; i++) {
      sysGenPass =
        sysGenPass + alphabets[Math.floor(Math.random() * 26)].toUpperCase();
    }
  }
  if (lowerCaseIndex != -1) {
    for (i = 0; i < eachCritLen; i++) {
      sysGenPass = sysGenPass + alphabets[Math.floor(Math.random() * 26)];
    }
  }
  if (numberIndex != -1) {
    for (i = 0; i < eachCritLen; i++) {
      sysGenPass = sysGenPass + Math.floor(Math.random() * 10);
    }
  }
  if (specialCaseIndex != -1) {
    for (i = 0; i < eachCritLen; i++) {
      sysGenPass =
        sysGenPass +
        specialChar[Math.floor(Math.random() * specialChar.length)];
    }
  }

  console.log("system generated password = " + sysGenPass);
  console.log("length of system generated password = " + sysGenPass.length);

  // generate letters for the left over length
  var leftOver = passwordLength - sysGenPass.length;
  for (i = 0; i < leftOver; i++) {
    if (defaultCri === "u") {
      sysGenPass =
        sysGenPass + alphabets[Math.floor(Math.random() * 26)].toUpperCase();
    } else if (defaultCri === "l") {
      sysGenPass = sysGenPass + alphabets[Math.floor(Math.random() * 26)];
    } else if (defaultCri === "n") {
      sysGenPass = sysGenPass + Math.floor(Math.random() * 10);
    } else if (defaultCri === "s") {
      sysGenPass =
        sysGenPass +
        specialChar[Math.floor(Math.random() * specialChar.length)];
    }
  }
  console.log("final generated password after adding left-over " + sysGenPass);

  return sysGenPass;
}
