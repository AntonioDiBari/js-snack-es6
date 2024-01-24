const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grade: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa ",
    grade: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grade: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grade: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grade: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grade: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grade: 84,
  },
];

// ARRAY DI NOMI IN MAIUSCOLO
const studentsNameUp = students.map((student) => student.name.toUpperCase());
console.log(
  "Nomi in maiuscolo: \n",
  studentsNameUp,
  "Tipo di dato dell'Array:",
  typeof studentsNameUp[0]
);

// ARRAY DI STUDENTI CON GRADE > 70
const studentsGradeOver70 = students.filter((student) => student.grade > 70);
console.log(studentsGradeOver70);

// ARRAY DI STUDENTI CON GRADE > 70 E ID DOPO IL NUMERO 120 (USANDO ARRAY PRECENDETE)
const studentsFilter = studentsGradeOver70.filter(
  (student) => student.id > 120
);
console.log(studentsFilter);

// ARRAY DI STUDENTI CON GRADE > 70 E ID DOPO IL NUMERO 120 (PARTENDO SEMPRE DAL PRIMO ARRAY)
const studentsFilter2 = students.filter(
  (student) => student.grade > 70 && student.id > 120
);
console.log(studentsFilter2);
