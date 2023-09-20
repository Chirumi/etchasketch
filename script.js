const container = document.querySelector(".container")
console.log(container)

function createDiv() {
    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div")
        newDiv.style.border = "solid"
        newDiv.style.borderWidth = "1px"
        newDiv.style.borderTop = "0px"
        newDiv.style.borderRight = "0px"
        newDiv.style.height = "20px"
        newDiv.style.width = "20px"
        container.appendChild(newDiv)
    }
}
createDiv()