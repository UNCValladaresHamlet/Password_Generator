// Pseudo code for Password HW
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


// Declared these arrays to hold values of lowercase, uppercase, numerical, and symbol characters
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Declared this variables globally to be used in our javascript
var length = "";
var confirmSpecialCharacters;
var confirmNumericalCharacters;
var confirmUppercaseCharacters;
var confirmLowercaseCharacters;
var newGeneratedPassword = "";
const validatedCharacterArray = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", getpasswordCriteria);

// Prompts user asking them how long they want their password. The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN.

function getpasswordCriteria() {
  // Variable to store length of password from user input
  length = parseInt(
    prompt('How many characters would you like your password to contain?') // 1.Ask how many characters the password should be
  );
  
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number'); 
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters'); // 2. Validate that the password length is at least 8 characters. If not, throw an alert (line above)
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }
  // Variable to store boolean regarding the inclusion of special, numerical, uppercase, lowercase characters
  // 3. Ask if they want special, numerical, uppercase, lowercase characters
  confirmSpecialCharacters = confirm(
    'Click OK to confirm you would like to include special characters'  // 4. I need a way to store all these characters, the numerical, special, upper, lower. Probably a variable
  );
  confirmNumericalCharacters = confirm(
    'Click OK to confirm you would like to include numerical characters' // 4. I need a way to store all these characters, the numerical, special, upper, lower. Probably a variable
  );
  confirmLowercaseCharacters = confirm(
    'Click OK to confirm you would  like to include lowercase characters' // 4. I need a way to store all these characters, the numerical, special, upper, lower. Probably a variable
  );
  confirmUppercaseCharacters = confirm(
    'Click OK to confirm you would like to include uppercase characters' // 4. I need a way to store all these characters, the numerical, special, upper, lower. Probably a variable
  );
  
  generatePassword(); //Nested function defined later on

}

// 5. Start building the password
function generatePassword() {
  if (confirmLowercaseCharacters) {
    for (var i = 0; i < lowercaseArray.length; i++) {  
      validatedCharacterArray.push(lowercaseArray[i]); 
    }
  }
  if (confirmUppercaseCharacters) {
    for (var i = 0; i < uppercaseArray.length; i++) {
      validatedCharacterArray.push(uppercaseArray[i]);
    }
  }
  if (confirmSpecialCharacters) {
    for (var i = 0; i < symbolArray.length; i++) {
      validatedCharacterArray.push(symbolArray[i]);
    }
  }
  if (confirmNumericalCharacters) {
    for (var i = 0; i < numberArray.length; i++) { 
      validatedCharacterArray.push(numberArray[i]);
    }
  }
  // 6. Randomly choose from each variable some characters to build string
  //Adds random character one at a time to new generated password
  for (var i = 0; i < length; i++) {
    newGeneratedPassword = newGeneratedPassword + validatedCharacterArray[Math.floor(Math.random() * validatedCharacterArray.length)];
    
  }
  console.log(validatedCharacterArray);
  writePassword();
}

// Write password to the #password input
// 7. Display the password
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = newGeneratedPassword; 

}