const container = document.querySelector("#container");
const genBtn = document.querySelector("#genBtn")

function createRows(count) {
    for (let i = 1; i <= count; i++) {
        const rows = document.createElement("div");
        rows.classList.add(`row`);
        container.appendChild(rows)
        createGrids(count, rows)
    }
}

function createGrids(count, rownumber) {
    for (let i = 1; i <= count; i++) {
        const grids = document.createElement("div");
        grids.classList.add("grids")
        rownumber.appendChild(grids)
    }

};

function createGrid(count) {
    container.innerHTML =""
    createRows(count)
}



genBtn.addEventListener("click", () => {
    let pixels = prompt("Set the size of the grid:")
    createGrid(pixels);
    let grids = document.querySelectorAll(".grids")
    grids.forEach((addColor) => {
    addColor.addEventListener("mouseover", () => {
        addColor.classList.add("colored")
    })
})
})