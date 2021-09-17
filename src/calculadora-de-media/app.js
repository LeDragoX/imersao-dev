let nome = "Plínio";
let grades = [
  parseFloat(Math.random() * 10),
  parseFloat(Math.random() * 10),
  parseFloat(Math.random() * 10),
  parseFloat(Math.random() * 10),
];
let finalGrade = 0;

grades.map((g) => {
  document.getElementById("page-grades").innerHTML += " | " + g.toFixed(1) + " | ";
  finalGrade += g;
});

finalGrade = (finalGrade / grades.length).toFixed(1);

console.log("Bem vindo:", nome, finalGrade);
document.getElementById("page-final-grade").innerHTML += " " + finalGrade;
