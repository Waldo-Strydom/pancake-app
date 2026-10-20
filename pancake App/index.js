const price = 6
const panInput = document.getElementById("pancakeIn")
const buyBtn = document.getElementById("enterBtn")
const total = document.getElementById("total")

function calculate(){
    // console.log(panInput.value)
   let answer = parseFloat(panInput.value) * price
    total.textContent = `Total: R${answer.toFixed(2)}`;
}


buyBtn.addEventListener("click", calculate)
// console.log(buyBtn)