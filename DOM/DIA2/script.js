"use stric";

let celdas = document.querySelectorAll("td");

console.log(celdas);

for (let celda of celdas) {
    let nota = celda.textContent;

    if (nota>=5) {
        celda.style.color = "blue";
    } else {
        celda.style.color = "red";
    }

    
}