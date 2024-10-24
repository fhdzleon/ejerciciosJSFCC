//! Sin KISS-->

function calcularTotal(precios, descuentos, impuestos) {
  return precios.reduce(
    (total, precio, i) =>
      total + precio - descuentos[i] + precio * impuestos[i],
    0
  );
}

//* Aplicando KISS-->

function calcularTotal(precios, descuentos, impuestos) {
  let total = 0;
  for (let i = 0; i < precios.length; i++) {
    total += precios[i] - descuentos[i] + precios[i] * impuestos[i];
  }
  return total;
}
