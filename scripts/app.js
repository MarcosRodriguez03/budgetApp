import { savelocalStorage, removeFromLocalStorage, getlocalStorage, getlocalStorageBudget, savelocalStorageBudget, getlocalStoragePrice } from "./localstorage.js"

let displayMoney = document.getElementById("displayMoney")

let budget = document.getElementById("budget")
let updateBudgetBtn = document.getElementById("updateBudgetBtn")


let addExpensesBtn = document.getElementById("addExpensesBtn")
let inputItem = document.getElementById("inputItem")
let inputPrice = document.getElementById("inputPrice")

let injectHistory = document.getElementById("injectHistory")
let injectModal = document.getElementById("injectModal")



console.log(
    getlocalStorage(),
    getlocalStoragePrice()
)



updateBudgetBtn.addEventListener('click', function () {
    savelocalStorageBudget(budget.value)
    LoadBudget()
})


addExpensesBtn.addEventListener('click', function () {

    let item = inputItem.value
    let price = inputPrice.value


    savelocalStorage(item, price)
    printAll()
    LoadBudget()


})

function printAll() {
    injectHistory.textContent = ""
    injectModal.textContent = ""
    let item = getlocalStorage()
    let price = getlocalStoragePrice()
    injectHistory
    for (let i = 0; i < item.length; i++) {
        createRemoveExpenses(item[i], price[i])
    }
}

function LoadBudget() {
    let number = getlocalStorageBudget()
    let price = getlocalStoragePrice()

    console.log(number)
    console.log(price)

    for (let i = 0; i < price.length; i++) {
        number -= price[i]

    }


    displayMoney.innerText = number
}

function createRemoveExpenses(item, money) {

    let div = document.createElement("div")
    div.className = "mt-2"
    let span = document.createElement("span")
    span.className = "d-flex justify-content-between"
    let p1 = document.createElement("p")
    p1.textContent = item
    let p2 = document.createElement("p")
    p2.textContent = money

    let button = document.createElement("button")
    button.className = "btn btn-danger removeBtnCSS"
    button.textContent = " remove expenses"
    button.addEventListener('click', function () {
        div.remove()
        removeFromLocalStorage(item)
        printAll()
        LoadBudget()
        createGoodHistory(item, money)
    })

    span.appendChild(p1)
    span.appendChild(p2)
    div.appendChild(span)
    div.appendChild(button)

    injectModal.appendChild(div)


    let span1 = document.createElement("span")
    span1.className = "d-flex justify-content-between addBorderBad"
    let p11 = document.createElement("p")
    p11.textContent = item
    let p21 = document.createElement("p")
    p21.textContent = money

    span1.appendChild(p11)
    span1.appendChild(p21)
    injectHistory.appendChild(span1)
}



function createGoodHistory(item, money) {
    let span = document.createElement("span")
    span.className = "d-flex justify-content-between addBorderGood"
    let p1 = document.createElement("p")
    p1.textContent = item
    let p2 = document.createElement("p")
    p2.textContent = money

    span.appendChild(p1)
    span.appendChild(p2)
    injectHistory.appendChild(span)
}


printAll()
LoadBudget()


{/* <span class="d-flex justify-content-between addBorderGood">
<p>Removed Chrome</p>
<p>+10</p>
</span> */}