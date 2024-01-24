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

const formattedList = vips.map((vip, posto) => {
  return {
    tableName: "Tavolo Vip",
    vipName: vip,
    seat: posto + 1,
  };
});

console.table("Lista invitati: \n" + vips);
console.log("Lista per la tipografia \n", formattedList);
