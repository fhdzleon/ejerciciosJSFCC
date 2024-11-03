const checkPalindrome = (str) => {
  let readyForCheck = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverse = readyForCheck.split("").reverse().join("");

  if (readyForCheck === reverse) {
    return "palindormo";
  }
  return "No es palindromo";
};

console.log(checkPalindrome("El agua! no_esta Lista"));
console.log(checkPalindrome("Anita lava la tina"));
