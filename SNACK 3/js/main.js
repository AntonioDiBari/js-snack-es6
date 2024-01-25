const bicycles = [
  {
    nameBicycle: "Atala",
    weightGr: generateNumber(250, 500),
  },
  {
    nameBicycle: "Bianchi",
    weightGr: generateNumber(250, 500),
  },
  {
    nameBicycle: "Cipollini",
    weightGr: generateNumber(250, 500),
  },
  {
    nameBicycle: "Piaggio",
    weightGr: generateNumber(250, 500),
  },
  {
    nameBicycle: "Gazelle",
    weightGr: generateNumber(250, 500),
  },
  {
    nameBicycle: "Ducati",
    weightGr: generateNumber(250, 500),
  },
];
const arrayOutput = document.getElementById("list");
const result = document.getElementById("result");
console.table(bicycles);
let lightBicycle;
let myVarweight = bicycles[0].weightGr;

for (let bike of bicycles) {
  arrayOutput.innerHTML += `<li>${bike.nameBicycle} <ul><li>del peso di ${bike.weightGr} gr</li></ul></li>`;
  if (bike.weightGr <= myVarweight) {
    lightBicycle = bike;
    myVarweight = bike.weightGr;
  }
}

let { nameBicycle, weightGr } = lightBicycle;
console.log(
  `La bici ${nameBicycle} è la più leggera perchè pesa ${weightGr} gr`
);
result.innerHTML = `La bici ${nameBicycle} è la più leggera perchè pesa ${weightGr} gr`;
