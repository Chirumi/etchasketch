const container = document.querySelector(".container")
console.log(container)

function createDiv() {
    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div")
        newDiv.style.border = "solid"
        newDiv.style.borderWidth = "1px"
        newDiv.style.borderTop = "0px"
        newDiv.style.borderRight = "0px"
        newDiv.style.height = "25px"
        newDiv.style.width = "25px"

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "red"
        })

        container.appendChild(newDiv)
    }
    
}



createDiv()