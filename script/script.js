// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLen = 0;
var password  = "";

/*obj with criteria to generator password */
var criteria = {
  passwordNumber : false,
  passwordLow : false,
  passwordUpper : false,  
  passwordSpecial : false
}

// Write password to the #password input
function writePassword() {

  passwordLen = parseInt(prompt("How many character would you like in the password. Please, the password must have at least 8 and maximum of 128 characters ?"));

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
    criteria.passwordNumber = confirm("Would you like number in the password ?");

    criteria.passwordLow = confirm("Would you like lowercase character in the password ?");

    criteria.passwordUpper = confirm("Would you like uppercase character in the password ?");

    criteria.passwordSpecial = confirm("Would you like special characters in the password ?");
  }

  /* Make sure the user has selected at least one criterion */
  if(checkSelectedCriteria()){
  
    password = generatePassword();

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

/* Verify that the user has selected at least one of the selected password generation criteria*/
function checkSelectedCriteria () {

  if (criteria.passwordLow == false && 
      criteria.passwordNumber == false &&  
      criteria.passwordUpper == false &&  
      criteria.passwordSpecial == false) {
    alert("You must select at least one criteria to generate the password.");
    return false;
  }

  return true;
}

/*Generator Password with selected criteria*/
function generatePassword(){

  /*For loop to execute of password length*/
  for (var i = 0; i < passwordLen ; ){
    /*Condition to execute only selected criteria (NUMBER) */
    if (criteria.passwordNumber)
    {
      /*function convertASCIItoChar with ASCII code parameter - ASCII code of number 0 to 9  */
      password = convertASCIItoChar(48, 57)
      i++
      if (i === passwordLen) { break; }
    }
    /*Condition to execute only selected criteria (LOWERCASE LETTER)*/
    if(criteria.passwordLow)
    {
      /*function convertASCIItoChar with ASCII code parameter - ASCII code of lowercase letter a to z  */
      password = convertASCIItoChar(97, 122)
      i++
      if (i === passwordLen) { break; }
    }

    /*Condition to execute only selected criteria (UPPERCASE LETTER)*/
    if(criteria.passwordUpper)
    {
      /*function convertASCIItoChar with ASCII code parameter - ASCII code of uppercase letter A to Z  */
      password = convertASCIItoChar(65, 90)
      i++
      if (i === passwordLen) { break; }
    }

    /*Condition to execute only selected criteria (SPECIAL CHARACTER)*/
    if(criteria.passwordSpecial)
    {
      /*function convertASCIItoChar with ASCII code parameter - ASCII code of special character !#$%&()*+,-./  */
      password = convertASCIItoChar(33, 47)
      i++
      if (i === passwordLen) { break; }
    }
  }
  return password;
}

/*function convertASCIItoChar with intervalo of ASCII code */
function convertASCIItoChar(min, max){

  //var test = "ABCDEFGHIJLMNOPQSJFJFJOEWRPRIW123456789!@#$%ˆ&*()";
  //password += test.charAt(Math.floor(Math.random() * Math.floor(test.length - 1))) 

  debugger;
  var numberASCII = Math.floor(Math.random() * Math.floor(max - min + 1) + min) 

  password += String.fromCharCode(numberASCII);
  console.log(password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);