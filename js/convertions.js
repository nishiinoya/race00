// Function to hide all conversion forms
function hideAllConversions() {
    const forms = document.querySelectorAll('.conversion-form');
    forms.forEach(form => {
        form.style.display = 'none';
    });
}

// Function to show the selected conversion form
function showConversion(type) {
    hideAllConversions(); // Hide all conversion forms

    // Show the selected conversion form
    if (type === 'length') {
        document.getElementById('length-conversion').style.display = 'block';
    } else if (type === 'mass') {
        document.getElementById('mass-conversion').style.display = 'block';
    } else if (type === 'area') {
        document.getElementById('area-conversion').style.display = 'block';
    } else if (type === 'numeral') {
        document.getElementById('numeral-conversion').style.display = 'block';
    }
}

// Close sidebar
function sideBarClose(id) {
    document.getElementById(id).style.display = "none";
}

// Conversion functions (Length, Weight, Area, Numeral Systems)
function convertLength() {
    const from = document.getElementById("length-from").value;
    const to = document.getElementById("length-to").value;
    const value = parseFloat(document.getElementById("length-value").value);

    if (isNaN(value)) {
        document.getElementById("length-result").textContent = "Please enter a valid number.";
        return;
    }

    let result = 0;

    // Conversion logic
    if (from === "cm" && to === "m") {
        result = value / 100;
    } else if (from === "cm" && to === "km") {
        result = value / 100000;
    } else if (from === "m" && to === "cm") {
        result = value * 100;
    } else if (from === "m" && to === "km") {
        result = value / 1000;
    } else if (from === "km" && to === "cm") {
        result = value * 100000;
    } else if (from === "km" && to === "m") {
        result = value * 1000;
    }

    document.getElementById("length-result").textContent = `Result: ${result} ${to}`;
}

function convertWeight() {
    const from = document.getElementById("weight-from").value;
    const to = document.getElementById("weight-to").value;
    const value = parseFloat(document.getElementById("weight-value").value);

    if (isNaN(value)) {
        document.getElementById("weight-result").textContent = "Please enter a valid number.";
        return;
    }

    let result = 0;

    // Conversion logic for weight
    if (from === "g" && to === "kg") {
        result = value / 1000;
    } else if (from === "g" && to === "t") {
        result = value / 1000000;
    } else if (from === "kg" && to === "g") {
        result = value * 1000;
    } else if (from === "kg" && to === "t") {
        result = value / 1000;
    } else if (from === "t" && to === "g") {
        result = value * 1000000;
    } else if (from === "t" && to === "kg") {
        result = value * 1000;
    }

    document.getElementById("weight-result").textContent = `Result: ${result} ${to}`;
}

function convertArea() {
    const from = document.getElementById("area-from").value;
    const to = document.getElementById("area-to").value;
    const value = parseFloat(document.getElementById("area-value").value);

    if (isNaN(value)) {
        document.getElementById("area-result").textContent = "Please enter a valid number.";
        return;
    }

    let result = 0;

    // Conversion logic for area
    if (from === "cm2" && to === "m2") {
        result = value / 10000;
    } else if (from === "cm2" && to === "km2") {
        result = value / 100000000;
    } else if (from === "cm2" && to === "ha") {
        result = value / 100000;
    } else if (from === "m2" && to === "cm2") {
        result = value * 10000;
    } else if (from === "m2" && to === "km2") {
        result = value / 1000000;
    } else if (from === "m2" && to === "ha") {
        result = value / 10000;
    } else if (from === "km2" && to === "cm2") {
        result = value * 100000000;
    } else if (from === "km2" && to === "m2") {
        result = value * 1000000;
    } else if (from === "km2" && to === "ha") {
        result = value * 100;
    } else if (from === "ha" && to === "cm2") {
        result = value * 100000;
    } else if (from === "ha" && to === "m2") {
        result = value * 10000;
    } else if (from === "ha" && to === "km2") {
        result = value / 100;
    }

    document.getElementById("area-result").textContent = `Result: ${result} ${to}`;
}

function convertNumeralSystem() {
    const from = document.getElementById("from-num-system").value;
    const to = document.getElementById("to-num-system").value;
    const value = document.getElementById("num-value").value.trim();

    if (value === "") {
        document.getElementById("numeral-result").textContent = "Please enter a valid number.";
        return;
    }

    let result = "";

    // Conversion logic for numeral systems
    if (from === "bin" && to === "dec") {
        result = parseInt(value, 2).toString(10);
    } else if (from === "bin" && to === "hex") {
        result = parseInt(value, 2).toString(16);
    } else if (from === "dec" && to === "bin") {
        result = parseInt(value, 10).toString(2);
    } else if (from === "dec" && to === "hex") {
        result = parseInt(value, 10).toString(16);
    } else if (from === "hex" && to === "bin") {
        result = parseInt(value, 16).toString(2);
    } else if (from === "hex" && to === "dec") {
        result = parseInt(value, 16).toString(10);
    }

    document.getElementById("numeral-result").textContent = `Result: ${result}`;
}