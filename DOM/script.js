const container = document.getElementById("container");
const button = document.getElementById("resize-button");

// Function to create the grid
function createGrid(size) {
    container.innerHTML = ""; // Clear existing grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let squareSize = 500 / size; // Calculate square size

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
}

// Function to get a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Resize grid when button is clicked
button.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size (max 100):"));
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size! Please enter a number between 1 and 100.");
    }
});

// Initialize default grid
createGrid(16);
