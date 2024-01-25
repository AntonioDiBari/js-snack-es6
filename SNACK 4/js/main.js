const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

const arrayOutput = document.getElementById("list");
let result = document.getElementById("result");

// PER OIGNI OBJ GENERO IL NUMERO RANDOMICO PER PUNTEGGIO E FALLI SUBITI
teams.forEach((team) => {
  team.score = generateNumber(1, 114);
  team.foul = generateNumber(1, 400);
  arrayOutput.innerHTML += `<li> <i class="fw-bold">${team.name} </i><ul><li>Ha totalizzato un totale di ${team.score} punti subendo in totale ${team.foul} falli nella stagione.</li></ul></li>`;
});

console.table(teams);

// CREAO IL NUOVO ARRAY
let teamsInfo = [];
let teamsInfo2 = [];

// CREO L'ELEMENTO OBJ CON SOLO NOME E FALLI SUBITI, LI AGGIUNGO QUINDI ALL'ARRAY SOTTO FORMA DI OBJ
for (let team of teams) {
  let { name, foul } = team;
  console.log(name, foul);
  teamsInfo.push({ name, foul });
  result.innerHTML += `La squadra <span class="fw-bold">${name}</span> ha subito un tot. di <span class="text-danger">${foul}</span> falli nell'arco della stagione </br>`;
  console.table(
    `La squadra ${name} ha subito un tot. di ${foul} falli nell'arco della stagione`
  );
}

// OPPPURE NE CREO UNO MAPPANDO QUELLO INIZIALE E GENERO UN ARRAY DI STRING
teamsInfo2 = teams.map(({ name, foul }) => `${name} + ${foul}`);
console.log(teamsInfo2);
