for (let i = 0; i < 16; i++){
    for (let n = 0; n < 16; n++){
        let container = document.querySelector(".container");
        let square = document.createElement("div");
        square.classList.toggle("square");
        container.appendChild(square);
    }
}