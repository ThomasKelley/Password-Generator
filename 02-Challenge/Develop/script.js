// Assignment Code
var generateBtn = document.querySelector("#generate");

// var passwordLength = charLength;
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var num = ["1","2","3","4","5","6","7","8","9","0"]
var symbol = ["!","@","#","$","%"]
var pass = [""]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  for (i = 0; i < charLength; i++) {
  var char = Math.floor(Math.random()*pass.lenth+1)
  var text = []
  password.push(pass[char])
}
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var charLength = window.prompt("How many characters?")
// make sure its a number
var upperOption = window.confirm("Do you want UPPERCASE letters?");
var numericOption = window.confirm("Do you want to include numbers?");
var symbolOption = window.confirm("Do you want to include special characters?");

window.prompt("How many characters?")
window.confirm("Do you want UPPERCASE letters?");
if (upperOption===true) {
  pass.push(upper)
}
window.confirm("Do you want to include numbers?");
if (numericOption===true) {
  pass.push(numericOption)
}
window.confirm("Do you want to include special characters?");
if (symbolOption===true) {
  pass.push(symbolOption)
}
