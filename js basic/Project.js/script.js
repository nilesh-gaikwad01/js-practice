// Select elements from the DOM
const heading = document.getElementById("main-heading");
const description = document.querySelector(".description");
const changeTextButton = document.getElementById("change-text");
const addItemButton = document.getElementById("add-item");
const list = document.getElementById("my-list");

// Example 1: Modify the content of an element
changeTextButton.addEventListener("click", () => {
    heading.textContent = "Welcome to the JavaScript DOM!";
    description.style.color = "blue"; // Change text color
});

// Example 2: Add a new element to the DOM
addItemButton.addEventListener("click", () => {
    const newItem = document.createElement("li"); // Create a new <li> element
    newItem.textContent = `Item ${list.children.length + 1}`; // Set its text
    list.appendChild(newItem); // Add the new <li> to the <ul>
});

//
