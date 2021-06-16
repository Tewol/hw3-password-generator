
//listen for the generate password button click and fire prompts when it's clicked.

 
  //Enter type of character to be included (lowercase, uppercase, numeric, and/or special characters)

    //check to see if atlist one character type is entered 

  //Based of the criteria entered, generate a password RANDOMELY



// declaring global variables  and create an array 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialchar = ['!','@','#','%','^','&','*','(',')','-','+'];


function prompts() {

    var length = prompt("Choose password length between 8 and 128");
    var getRandomNumber = confirm("Click Ok if you want to include numbers in your password?");
    var getRandomLower = confirm("Click Ok if you want to include lower caseletters in your password?");
    var getRandomUppder = confirm("Click Ok if you want to include upper casee letters for your password?");
    var getRandomSpecial = confirm("Click Ok if you want to include special character for your password?");
    
    if((length < 8)||(length > 128)){
      alert("Choose password length between 8 and 128");
  
    } else if((!getRandomNumber)&&(!getRandomLower)&&(!getRandomUppder)&&(!getRandomSpecial)){
      alert("Must choose at least one type.");

    }else
    isValid = true;


    //object 
    var responses = {

      length: length,
      number:getRandomNumber,
      lower:getRandomLower, 
      upper:getRandomUppder,
      specialChar:getRandomSpecial

    }
  return responses;
}
// this generates password by joining answers from the prompt 
function generatePassword() {
  var UserChoice = prompts();
  var results = [];
  var displayPassword = "";


  if (UserChoice.number) {
    for (var i of numbers)
    results.push(i);
  }
  if (UserChoice.lower) {
    for (var i of lowerCase)
    results.push(i);
  }
  if (UserChoice.upper) {
    for (var i of upperCase)
    results.push(i);
  }
  if (UserChoice.specialChar) {
    for (var i of specialchar)
    results.push(i);
  }


  console.log(results);


  for (var i = 0; i < UserChoice.length; i++) {
    displayPassword += results[Math.floor(Math.random() * results.length)];
    
  }
  console.log(displayPassword);

  return displayPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// declare and assign generate password button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



