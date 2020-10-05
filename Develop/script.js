// Assignment Code
var generateBtn = document.querySelector("#generate");

/*prompt directions
prompt length 8 to 128, text box
change string to number--for index# (minus 1)
prompt characters, make var for each
-lowercase
-uppercase
-numeric
-special
concat vars
randomly choose index from vars
concat random
connect to output--display on screen, connect to html
*/



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  alert("Please select from the following criteria which to be included in your secure password.")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword){
  document.querySelector("#generate")
  //the function goes here
}
