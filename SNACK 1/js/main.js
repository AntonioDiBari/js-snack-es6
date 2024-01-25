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
const formattedList = vips.map(
  (vip, posto) => /* getvipObj("Tavolo Vip", vip, posto) */ {
    return {
      tableName: "Tavolo Vip",
      vipName: vip,
      seat: posto + 1,
    };
  }
);

// POSSO ANCHE CREARE UNA FUNZIONE PER IL RETURN
// function getvipObj(table, name, index) {  return {
//   tableName: table,
//   vipName: name,
//   seat: index + 1,
// };}

// STAMPO LE LISTE IN CONSOLE
console.table("Lista invitati: \n" + vips);
console.log("Lista per la tipografia \n", formattedList);

// OPPURE CON .forEach

// const guestObj=[];

// vips.forEach((_guest, index) => {
//   const guest = {
//     _name: _guest,
//     placeholder: index + 1,
//     _tableName: "Tavolo Vip",
//   };
//   guestObj.push(guest);
// });
