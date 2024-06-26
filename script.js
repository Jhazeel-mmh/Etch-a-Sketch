for (let i = 0; i < 16; i++){
    for (let n = 0; n < 16; n++){
        let container = document.querySelector(".container");
        let square = document.createElement("div");
        square.classList.toggle("square");
        square.setAttribute("id", `${i}-${n}`)
        container.appendChild(square);
    }
}

function changeSquareBackground(e){
    let targetSquare = e.target;
    targetSquare.style.backgroundColor = "#e7324d";
}


let container = document.querySelector(".container");
container.addEventListener("mouseover", changeSquareBackground);

