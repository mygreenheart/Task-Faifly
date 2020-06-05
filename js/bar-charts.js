const array = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13]
const max = Math.max.apply(Math, array)
const divChart = document.getElementById("chart")
const divY = document.getElementById("y-line")
const divX = document.getElementById("x-line")
const divContent = document.getElementById("content")

for (let i = 1; i < array.length + 1; i++) {
    const div = document.createElement("div")
    const span = document.createElement("span")
    div.className = "x" + " " + "col"
    span.textContent = i;
    div.appendChild(span);
    divX.appendChild(div)
}

for (let i = 1; i < max + 1; i++) {
    const div = document.createElement("div")
    const span = document.createElement("span")
    div.className = "y"
    span.textContent = i;
    div.appendChild(span);
    divY.appendChild(div)
}
for (let i = 0; i < array.length; i++) {

    const div = document.createElement("div")
    const span = document.createElement("span")
    span.textContent = array[i]
    div.appendChild(span)
    div.className = "col" + " " + "number" + i + " " + 'align-self-end'
    let height = array[i] * 30;

    if (array[i] <= 5) {
        div.style.height = height + "px"
        div.style.backgroundColor = "green"
    } else if (array[i] >= 5 && array[i] <= 10) {
        div.style.height = height + "px"
        div.style.backgroundColor = "yellow"
    } else {
        div.style.height = height + "px"
        div.style.backgroundColor = "red"
    }
    divContent.appendChild(div)
}