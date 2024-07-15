let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');

// Enter
inputBox.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        addItem(this.value)
        this.value = ""
    }
});


// addItem Arrow Function
let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i></i>`;

    // Toggle Done
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    });


    // Delete Item
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
    });

    list.appendChild(listItem);
}

