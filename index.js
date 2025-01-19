let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0 

function increment() {
    count += 1 
    countEl.textContent = count
}

function save() {
    let numStr = count + "- "
    saveEL.textContent += numStr
    count = 0
    countEl.textContent = 0
}

function decrement() {
    count -= 1
    countEl.textContent = count
}