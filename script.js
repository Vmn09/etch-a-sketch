const container = document.querySelector("#container");
const genBtn = document.querySelector("#genBtn")
const canv_res = document.querySelector("#canv_res")
const clrBtn = document.querySelector("#clrBtn")

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

function btnPrompt() {
    let res = prompt("Enter a resolution:")
    return res
}

function btnEvent() {
    let pixels = btnPrompt()
    if (pixels > 100) {
        alert("Enter a value under 100!")
        btnEvent()
    } else if (pixels === null) {
        return
    } else {
        createGrid(pixels)
        canv_res.textContent = `${pixels}x${pixels}`
    }
    let grids = document.querySelectorAll(".grids")
    grids.forEach((addColor) => {
    addColor.addEventListener("mouseover", () => {
        addColor.classList.add("colored")
    })
    })
}

genBtn.addEventListener("click", btnEvent)

clrBtn.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grids")
    grids.forEach((removeColor) => {
        removeColor.classList.remove("colored")
    })
})
