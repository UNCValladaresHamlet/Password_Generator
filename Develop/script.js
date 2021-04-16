// Pseudo code for password hw
// Product managers
// 1. Ask how many characters the password should be
// 2. Validate that the password length is at least 8 characters. If not, throw an alert
// 3. Ask if they want special, numerical, uppercase, lowercase characters
// 4. I need a way to store all these characters, the numerical, special, upper, lower. Probably a variable
// 5. Start building the password
// 6. Randomly choose from each variable some characters to build string
//  if a user chooses 8 characters, take 2 characters from each character set if they choose all
//  use math.random to look into my variables that store all the characters and randomly choose one
//  need a variable that will be the final password and i slowly keep adding to it
//  might need a way to shuffle the password
//  28!@alEW
//  W8l!a@2
// 7. Display the password

//Ask how many characters the password should be
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'G', 'H', 'I', 'J']
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '8', '9']
var symbolsCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

console.log('character:',numericCharacters)

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  }
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  

}


// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions());
