const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")
let randomIndex = 0
let length = 0

function lenght5() {
    length = 5
    return length
}

function lenght10() {
    length = 10
    return length
}

function lenght15() {
    length = 15
    return length
}

function lenght20() {
    length = 20
    return length
}

function generatePasswords() {
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""

    for (i=0; i<length; i++){
    randomIndex = Math.floor( Math.random() * characters.length)
    firstPasswordEl.textContent += characters[randomIndex]
}

for (i=0; i<length; i++){
    randomIndex = Math.floor( Math.random() * characters.length)
    secondPasswordEl.textContent += characters[randomIndex]
}
}

