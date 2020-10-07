// Assignment Code

//variables
var alphaBlock = "abcdefghijklmnopqrstuvwxyz"
var numbersBlock = "0123456789"
var alphaLower = alphaBlock.split("")
var alphaUpper = alphaBlock.toUpperCase().split("")
var allNumbers = numbersBlock.split("")
var specialBlock = "!@#$%^&*?"
var allSpecial = specialBlock.split("")

// Write password to the #password input 
function generatePassword() {

  var includeLower = []
  var includeUpper = []
  var includeNumbers = []
  var includeSpecial = []
  var passwordChosen = []

  //selecting password length
  while (true){
    chosenLength = prompt("Choose a password length between 8 and 128 characters")
    if (chosenLength > 7 && chosenLength < 129) {
      alert("Your password will have " + chosenLength + " characters.");
      break;
    }
   else {
     alert("That is not a valid length.")
    }
  } 

  //selecting which characters to use
  var lowerCase = confirm("Would you like lowercase letters to be included?")
  if (lowerCase){
    var includeLower = includeLower.concat(alphaLower)
    }
    else {
      includeLower = []
    }

  var upperCase = confirm("Would you like uppercase letters to be included")
   if (upperCase) {
        var includeUpper = includeUpper.concat(alphaUpper)
      }
    else {
          includeUpper = []
      }

  var askNumbers = confirm("Would you like numbers 0-9 to be included?")
   if (askNumbers){
        var includeNumbers = includeNumbers.concat(allNumbers)
        }
    else {
        includeNumbers = []
        }

  var specialCharacters = confirm("Would you like special characters to be included?")
   if (specialCharacters){
      var includeSpecial = includeSpecial.concat(allSpecial)
       }
    else {
       includeSpecial = []
       }

  //character type selection completed

  var passwordLength = parseInt(chosenLength) + 1
  var passwordArray = includeLower.concat(includeUpper, includeNumbers, includeSpecial)

  //make sure at least one character type is chosen
  while (true){
    if (passwordArray.length > 10){
      break
    }
    else {
      alert("You must select at least one character type.");
      break
    }
  }

 //creating the password
  do {
    var addUnit = passwordArray[Math.floor(Math.random()*passwordArray.length)];
    passwordChosen.push(addUnit)
  }
  while (passwordChosen.length < passwordLength)

  return passwordChosen.join("")

}

//provided code
var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
