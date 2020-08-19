// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLen = 0;
var passwordNumber = false;
var passwordLow = false;
var passwordUpper = false;
var passwordSpecial = false;
var password  = "";

// Write password to the #password input
function writePassword() {

  passwordLen = parseInt(prompt("How many character would you like in the password. Please, the password must have at least 8 and maximum of 128 characters ?"));

  debugger;
  if (isNaN(passwordLen))
  {
    alert("It is not a number. Please enter a number from 8 to 128");
    return; 
  }
  else if (passwordLen <8 || passwordLen >128)
  {
    alert ("Your number (" + passwordLen + ") is no matches requirements. Please enter a number from 8 to 128");
    return;
  }
  else{ 
    passwordNumber = confirm("Would you like number in the password ?");

    passwordLow = confirm("Would you like lowercase character in the password ?");

    passwordUpper = confirm("Would you like uppercase character in the password ?");

    passwordSpecial = confirm("Would you like special characters in the password ?");
  }
  if (passwordNumber == false && passwordLow == false &&  passwordUpper == false &&  passwordSpecial == false){
    alert("You must select at least one criteria to generate the password.");
  }
  else{
     password = generatePassword();
  }


  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

function generatePassword(){
  var teste = "ABECDLSLKSJFJFJOEWRPRIW123456789";
 
  for (var i = 0; i < passwordLen ; i++){
    password += teste.charAt(Math.floor(Math.random() * Math.floor(teste.length - 1))) 
  //  console.log(password);
  }
  return password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
