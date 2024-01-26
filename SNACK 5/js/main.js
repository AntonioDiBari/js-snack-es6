let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station",
    capacity: 5,
  },
  {
    color: "green",
    type: "berlina",
    capacity: 4,
  },
  {
    color: "yellow",
    type: "muscle",
    capacity: 4,
  },
  {
    color: "black",
    type: "sportiva",
    capacity: 5,
  },
  {
    color: "white",
    type: "smart",
    capacity: 2,
  },
];

let passenger = parseInt(prompt("In quante persone viaggiate?"));
console.log("passeggeri selezionati: ", passenger);

cars.forEach((car) => {
  if (passenger <= car.capacity) {
    alert(`La ${car.type} è adatta per te`);
  } else {
    console.warn(`La ${car.type} non va bene, siete in tanti `);
  }
});
