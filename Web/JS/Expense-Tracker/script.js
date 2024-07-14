// Initial References
let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById('user-amount');
let tempAmount = 0;


const checkBtn = document.getElementById("checkBtn");
const totalBtn = document.getElementById("totalBtn");
const errorMsg = document.getElementById("budget-error");

const productTitle = document.getElementById("product-title");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");

const amount = document.getElementById("amount");
const balanceValue = document.getElementById("balance-amount");

const list = document.getElementById("list");



// Set Budget Function
totalBtn.addEventListener("click", () => {

    tempAmount = totalAmount.value;
    //empty or negative input
    if (tempAmount === "" || tempAmount < 0) {
        errorMsg.classList.remove("hide");
    } else {
        errorMsg.classList.add("hide");

        // Set Budget
        amount.innerHTML = tempAmount;
        // Set Balance
        balanceValue.innerText = tempAmount - balanceValue.innerText;
        // Clear Input Box
        totalAmount.value = "";
    }
});



// Function Create List
const listCreator = (expenseName, expenseValue) => {

    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-Content", "flex-space");
    
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p> 
                                <p class="amount">${expenseValue}</p>`;

    let editBtn = document.createElement("button");
    editBtn.classList.add("fa-solid", "fa-pen-to-square", "edit");

    // EditBtn
    editBtn.style.fontSize = "24px";
    editBtn.addEventListener("click", () => {

        modifyElement(editBtn, true);
    });

    // DeleteBtn
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteBtn.style.fontSize = "24px";
    deleteBtn.addEventListener("click", () => {

        modifyElement(deleteBtn);
    });


    sublistContent.appendChild(editBtn);
    sublistContent.appendChild(deleteBtn);
    document.getElementById("list").appendChild(sublistContent);
};




// Function to Add Expenses
checkBtn.addEventListener("click", () => {

    // Empty Checks
    if (!userAmount.value || !productTitle.value) {
        productTitleError.classList.remove("hide");
        return false;
    } 

        // Enable Buttons
        disableBtns(false);

        // Expense
        let Expenditure = parseInt(userAmount.value);
        // Total Expense
        let sum = parseInt(expenseValue.innerHTML) + Expenditure;
        // Update Total Expense Value
        expenseValue.innerText = sum;

        // Total Balance
        const totalBalance = tempAmount - sum;
        balanceValue.innerText = totalBalance;


        // Create list 
        listCreator(productTitle.value, userAmount.value);

        // reset inputs
        productTitle.value = "";
        userAmount.value = "";
    
});



// Function to Modify List Elements
const modifyElement = (element, edit = false) => {

    let parentDiv = element.parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenseValue.innerText;

    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableBtns(true);
    }
    balanceValue.innerText = parseInt
    (currentBalance) + parseInt(parentAmount);
    expenseValue.innerText = 
        parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
};








// Disable Edit/Delete Btns
const disableBtns = (bool) => {
    let editBtns = document.getElementsByClassName("edit");
    Array.from(editBtns).forEach((element) => {
        element.disabled = bool;
    });
};