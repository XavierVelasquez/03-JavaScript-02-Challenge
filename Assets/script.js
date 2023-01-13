var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max); {
    max = min;
    min = 0;
  }
  let random = Math.random();
  return Math.floor(min*(1 - random) + random*max);
};

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function correctuser() {
  let userInput = window.prompt("How many text characters do you want in your password?");
  const passwordLength = parseInt(userInput);

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The password must be 8 to 128 characters long.");
    return;
  }

  if (!passwordLength) {
    window.alert("Please use number that is not a word, letter, or symbol.");
    return;
  }

  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseList = [];
  const numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "~", "_", "+", "<", ">", "/", "?"];
  const noselect = []; 
  const userWantsLowercase = window.confirm("Do you want lowercase letters in your password?");
  const userWantsUppercase = window.confirm("Do you want UPPERCASE letters in your password?");
  const userWantsNumbers = window.confirm("Do you want numbers in your password?");
  const userWantsSymbols = window.confirm("Do you want symbols in your password?");
  
  
  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  };
  
  if (userWantsLowercase === true) 
    noselect.push(lowercaseList);
  
  
  if (userWantsUppercase === true) {
    noselect.push(uppercaseList);
  }
  
  if (userWantsNumbers === true) {
    noselect.push(numbersList);
  }
  
  if (userWantsSymbols === true) {
    noselect.push(symbolsList);
  };
  
  if (noselect.length === 0) {
    noselect.push(lowercaseList);
  }
  let generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(noselect);
    var randomchar = getRandomItem(randomList);
      generatedPassword += randomchar;
    };

  return generatedPassword;
};


function writePassword() {
  let password = correctuser();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);