// Assignment Code
var generateBtn = document.querySelector("#generate");



// Special characters
var specialChar = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", "<", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ]

// object contating all random generators
var random = {
  lowerCase: lettersLower,
  upperCase: lettersUpper,
  numbers: randomNumber,
  special: randomSpecial
};



// Random generators
function lettersLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function lettersUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial(){
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}


// basic function

function generatePassword(){

// length prompt
   var length = prompt("How many characters would you like?")

   if (length == "null" || length == null || length == ""){
    return;
  }

  // bottom limit
    if (length <=7) {
      alert("Minimum length of 8!!")

      return null;
   }
   
// roof limit
   if (length > 128){
    alert("Maximum length of 128!!")

    return null;
   }

  //  has to be a number
  if (isNaN(+ length)) {
  alert("Must be a number!!")
  
   return null;
  
}
else{
  
}


var lowerCase = confirm("Would you like to include lowercase letters?")
if (lowerCase === true){
 lowerCase === lowerCase
}
 else {
  lowerCase === false 
}

var upperCase = confirm("Would you like to include uppercase letters?")

if (upperCase === true){
  upperCase === true
}
 else {
  upperCase === false 
}

var numbers = confirm("Would you like to include numbers?")

if (numbers === true ){
  numbers === true
}
else {
  numbers === false
}

var special = confirm("Would you like to include special characters?")

if (special === true){
  special === true
}
else {
  special === false 
}

// prompt data
choices = {
  length: length,
  lowerCase: lowerCase,
  upperCase: upperCase,
  numbers: numbers,
  special: special
 };


// type count
var count = lowerCase + upperCase + numbers + special;

// if somebody chooses "no" on all to be funny
if(count === 0){
  return null;
}

// discards false
 var objCheck = [{lowerCase}, {upperCase}, {numbers}, {special}].filter
 (item => Object.values(item)[0]);


//  empty string 
generate = '';

// safe loop
for (var i = 0; i < length; i += count){
objCheck.forEach(type => {
var finalPass = Object.keys(type)[0];


// string generator
generate += random[finalPass]();

});

}

// limits length
var fullyGenerated = generate.slice(0, length);


// prints the password
return fullyGenerated;

 }

 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
