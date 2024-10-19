const character = "#";
const count = 8;
const rows = [];
let inverted = false;
let result = "";

/* Función que centra la linea */
const padRow = (rowNumber, rowCount) => {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
};

/* Bucle para armar todas las lineas */
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

//? Alternativas del bucle anterior:

/* while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
} */

/* for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
} */

/* Bucle para concatenar las lineas y darles el salto de linea */
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
