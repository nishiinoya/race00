function memoryRecall() {
    document.getElementById("result").setAttribute("value", memory);
    updateMemoryDisplay();
}

function memoryClear() {
    memory = 0;
    updateMemoryDisplay();
}

function memoryAdd() {
    let current = parseFloat(document.getElementById("result").getAttribute("value"));
    if (!isNaN(current)) {
        memory += current;
        updateMemoryDisplay();
    }
}

function memorySubtract() {
    let current = parseFloat(document.getElementById("result").getAttribute("value"));
    if (!isNaN(current)) {
        memory -= current;
        updateMemoryDisplay();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnMR").addEventListener("click", memoryRecall);
    document.getElementById("btnMC").addEventListener("click", memoryClear);
    document.getElementById("btnMPlus").addEventListener("click", memoryAdd);
    document.getElementById("btnMMinus").addEventListener("click", memorySubtract);
});

function updateMemoryDisplay() {
    const memoryDisplay = document.getElementById("memoryValue");
    if (memoryDisplay) {
        memoryDisplay.textContent = memory;
    }
}