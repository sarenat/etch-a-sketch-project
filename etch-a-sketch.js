const body = document.querySelector("body");

const newGridButton = document.createElement("button");
newGridButton.textContent = "New Grid";
newGridButton.addEventListener('click', () => {
    const input = prompt("Enter your new grid size (max 100");
    generateGrid(input);
})
body.appendChild(newGridButton);

const container = document.getElementById("container");

function generateGrid(input) {
    if (input>100) {
        alert("That's more than 100, silly. Try again")
        return;
    }

    const previousGrid = document.getElementById("grid");
    if (previousGrid) container.removeChild(previousGrid);

    const grid = document.createElement("div");
    grid.setAttribute("id", "grid");

    for (let i = 1; i <= input; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row");
        
        for (let i = 1; i<= input; i++) {
            const box = document.createElement("div");
            box.setAttribute("id", "box");

            row.appendChild(box);
        }
        grid.appendChild(row);
    };
    container.appendChild(grid);
};