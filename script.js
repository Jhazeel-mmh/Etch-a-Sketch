let container = document.querySelector(".container");

function createSquares (n = 16){
    for (let i = 0; i < 16; i++){
        let row = document.createElement("div");
        row.setAttribute("id", `row-${i}`);
        row.classList.toggle("row");
        for (let n = 0; n < 16; n++){
            let square = document.createElement("div");
            square.classList.toggle("square");
            square.setAttribute("id", `${i}-${n}`);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function changeSquareBackground(e){
    let targetSquare = e.target;
    targetSquare.style.backgroundColor = "#e7324d";
}

document.addEventListener("DOMContentLoaded", createSquares);
container.addEventListener("mouseover", changeSquareBackground);

