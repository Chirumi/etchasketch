const container = document.querySelector(".container")
const btn = document.querySelector(".btn")
const rgbBtn = document.querySelector(".rgbBtn")
const eraser = document.querySelector(".eraser")
const clear = document.querySelector(".clear")

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

rgbBtn.addEventListener("click", () => {
    const divColorChange = document.querySelectorAll(".container > div")
    divColorChange.forEach((boxColor) => {
        boxColor.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
            boxColor.style.backgroundColor = `rgb(${red},${green},${blue})`
        })
    })
})

eraser.addEventListener("click", () => {
    const divErase = document.querySelectorAll(".container > div")
    divErase.forEach((boxWhite) => {
        boxWhite.addEventListener("mouseover", () => {
            boxWhite.style.backgroundColor = "white"
        })
    })
})

clear.addEventListener("click", () => {
    const clearAll = document.querySelectorAll(".container > div")
    clearAll.forEach((boxClear) => {
        boxClear.style.backgroundColor = "white"
    })
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