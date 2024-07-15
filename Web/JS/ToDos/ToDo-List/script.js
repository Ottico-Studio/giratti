const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Function
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add Close Btn 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    // Clear input value
    inputBox.value = "";
}



// Delete Function
listContainer.addEventListener("click", function(e) {

    if(e.target.tagName === "LI") {
        e.target.classList.toggle("Checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);



// Save Data 23:10
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); 
}

// Show Data
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();