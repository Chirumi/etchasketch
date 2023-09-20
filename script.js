const container = document.querySelector(".container")
const btn = document.querySelector(".btn")

createDiv(16, 35)

btn.addEventListener("click", () => {
    let gridSize = prompt("How many squares per side do you want in your new grid? (Max 100)", 16)
    if (gridSize > 0 && gridSize <= 100) {
        const boxes = document.querySelectorAll(".container > div")
        boxes.forEach((box) => {
            container.removeChild(box)
        })
        createDiv(gridSize,((576/gridSize) - 1))
    } 
    else if (!(gridSize > 0 && gridSize <= 100) && !(gridSize == undefined)) {
        alert("Enter a valid value from 1 to 100!")
    }
})

function createDiv(boxAmount, boxSize) {
    for (let i = 0; i < boxAmount * boxAmount; i++) {
        const newDiv = document.createElement("div")
        newDiv.style.border = "solid"
        newDiv.style.borderWidth = "1px"
        newDiv.style.borderTop = "0px"
        newDiv.style.borderRight = "0px"
        newDiv.style.height = `${boxSize}px`
        newDiv.style.width = `${boxSize}px`

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "red"
        })

        container.appendChild(newDiv)
    }
    
}