

let color = document.getElementById('color')
let place = document.getElementById('place')
let ritual = document.getElementById('ritual')

function colorBtn() {
    alert('My favorite color is Red!')
}

function placeBtn() {
    alert('My favorite place is Rice Eccles Stadium')
}

function ritualBtn() {
    alert('My favorite ritual is cheering at football games')
}

color.addEventListener('click', colorBtn)
place.addEventListener('click', placeBtn)
ritual.addEventListener('click', ritualBtn)