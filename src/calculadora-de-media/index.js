let nome = "Plínio";
let grades = [9, 7, 4, 2];
let finalGrade = 0;

grades.map((g) => {
  document.getElementById("page-grades").innerHTML += " | " + g + " | ";
  finalGrade += g;
});

finalGrade = (finalGrade / grades.length).toFixed(2);

console.log("Bem vindo:", nome, finalGrade);
document.getElementById("page-final-grade").innerHTML += " " + finalGrade;
