// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for characters
var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] // Array ["A", ]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","_","+","=","-","'",":","?","/"];
//.split("")
//array.map
// Write password to the #password input
function writePassword() {
   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password){
  passwordText.value = password;
  }
  // 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//RANDOMIZER

//PROMPTS FOR USER TO ANSWER
function generatePassword() {
  //STRING for new password
  var  newPassword = ""
  //  EMPTY ARRAY FOR CHOICES
  var choices = [];
  
  
  
  //CONSTRAINTS
  var passwordLength = parseInt(prompt("HOW MANY CHARACTERS WOULD YOU LIKE?"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("PASSWORD MUST BE BETWEEN 8 AND 128 CHARACTERS.");
    return
  }
  //PROMPTS
  
  if (confirm("WOULD YOU LIKE CAPITAL LETTERS?")){
    choices =choices.concat(capital)
  };
  if( confirm("WOULD YOU LIKE LOWERCASE LETTERS?")){
    choices =choices.concat(lowercase)
  };
  if(confirm("WOULD YOU LIKE NUMBERS?")){
    choices =choices.concat(numbers)
  }
  if(confirm("WOULD YOU LIKE SPECIAL CHARACTERS?")){
    choices =choices.concat(special)
  }
  if (!choices.length){
    alert("NEED A CRITERIA")
    return
  }
  //randomizer
  for (var i = 0; i < passwordLength; i++) {
  var randomizer = (Math.floor(Math.random()*choices.length));
     newPassword += choices[randomizer]
}
  return newPassword

}



