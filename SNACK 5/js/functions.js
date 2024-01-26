/**
 *
 * @param {number} max il numero massimo
 * @param {number} min il numero minimo
 * @returns {number} number il numero generato
 */
function generateNumber(max, min) {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}
