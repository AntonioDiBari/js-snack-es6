const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

// CREO UN ARRAY CHE CONTENGA OGGETTI CON CHIAVI RICHIESTE DALLA TIPOGRAFIA
const formattedList = vips.map((vip, posto) => {
  return {
    tableName: "Tavolo Vip",
    vipName: vip,
    seat: posto + 1,
  };
});

// STAMPO LE LISTE IN CONSOLE
console.table("Lista invitati: \n" + vips);
console.log("Lista per la tipografia \n", formattedList);
