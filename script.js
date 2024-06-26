let container = document.querySelector(".container");

function createSquares (amount = 16){
    for (let i = 0; i < amount; i++){
        let row = document.createElement("div");
        row.setAttribute("id", `row-${i}`);
        row.classList.toggle("row");
        for (let n = 0; n < amount; n++){
            let square = document.createElement("div");
            square.classList.toggle("square");
            square.setAttribute("id", `${i}-${n}`);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function randomColor(){
    let color = "#";
    for (let i = 0; i < 6; i++){
        let subcolor = Math.floor(Math.random() * 10);
        if (subcolor > 7) subcolor = "f";
        color += subcolor;
    }
    return color;
}

function changeSquareBackground(e){
    let targetSquare = e.target;
    if (targetSquare.className === "container") return;
    if (targetSquare.style.backgroundColor) return;
    targetSquare.style.backgroundColor = randomColor();
}

function addOpacity(e){
    let targetSquare = e.target;
    let opacity = Number(targetSquare.style.opacity);
    if (opacity !== 1) opacity += 0.1;
    targetSquare.style.opacity =  `${opacity} `;
}

document.addEventListener("DOMContentLoaded", () => {
   createSquares()
});

container.addEventListener("mouseover", changeSquareBackground);
container.addEventListener("mouseover", addOpacity);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let choose;
    while (true) {
        choose = prompt("Type a number between 1 and 100 | Ingrese un número entre 1 y 100:");
        if (!(choose)) return;
        choose = Number(choose);
        if (choose > 0 && choose <= 100) break;
    }

    container.textContent = "";
    createSquares(choose);
});

let rgbBtn = document.querySelector(".randomize");
let darkerBtn = document.querySelector(".darker");


