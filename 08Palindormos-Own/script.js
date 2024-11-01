const palindroInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const respuesta = document.getElementById("result");

const getValueInput = () => {
  const value = palindroInput.value;
  console.log(value);
  return value;
};

const verify = () => {
  const input = getValueInput();

  if (input.length === 0) {
    alert("ingresa algo wey!");
  } else {
    alert("hay vas papi");
  }
};

checkButton.addEventListener("click", verify);
