let result = 0
let history = [];
let memory = 0;

function printNumber(number) {
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if (text === null) return;
    if (text.match(/\d+$/) !== null && text.match(/\d+$/)[0] == "0") {
        text = text.replace(/\d+$/, "")
    }
    if(text.charAt(text.length - 1) == "!") return;
    text += number
    input.setAttribute("value", text)
}

function printPoint() {
    let input = document.getElementById("result").getAttribute("value")
    if (input === null) return;
    const regex = /[\d\.]+$/
    let number = input.match(regex)[0]
    if (number.includes(".")) return;
    document.getElementById("result").setAttribute("value", input + ".")
}

function printOperation(operation) {
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if (text === null) return;
    //if (text.match(/\d$/) === null) return;
    // if (text === "0") {
    //     text = "";
    // }
    if (text.match(/[\d\)!]$/) === null && operation !== "√" && operation !== "!") return;
    if(operation === "^" && text.indexOf("^") !== -1) return;
    if(operation === "^" && text.indexOf("%") !== -1) return;
    if (operation === "!" || operation === "^" || operation === "%"){
        text += operation
        input.setAttribute("value", text)
        return
    }


    if (operation === "√") {
        text += "√(";
    } else {
        if(text.charAt(0) == "-" && document.querySelector("#content_before").innerHTML != ""){
            document.querySelector("#content_before").innerHTML += "(" + text + ")" + operation;
        }else{
            document.querySelector("#content_before").innerHTML += text + operation;
        }
        text = "0";
    }
    input.setAttribute("value", text)
}

function cleanInput() {
    if(document.getElementById("result").getAttribute("value") == "0"){
        document.querySelector("#content_before").innerHTML = ""
    }
    document.getElementById("result").setAttribute("value", "0")
}

function printNegative() {
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if (text === null) return;
    if (text.match(/\d+$/) === null) return;
    let number = text.match(/\d+$/)[0]
    if (number == "0") return;
    text = text.replace(/\d+$/, "")
    if(text.charAt(0) == "-"){
        input.setAttribute("value", number)
        return;
    }
    input.setAttribute("value", "-" + number)

    //input.setAttribute("value", text + "(-" + number + ")")
}

function factorial(n) {
    return +!n || n * factorial(n - 1);
}
function repeatFactorial(n, len) {
    for(let i = 0; i < len; i++){
        n = factorial(n);
    }
    return n;
}
function stringValidator(text) {
    let str = text.replace(/(\d+)(!+)/g, (_, num, len) => { 
        const result = repeatFactorial(Number(num), len.length);
        return result;
    });
    str = str.replace(/(\d+\.)?(\d+)(\^)(\d+)(\.\d+)?/g,(_, num1, floatpart1, option , num2, floatpart2) => { 
        num1 = typeof(num1) == "undefined" ? floatpart1 : num1 + floatpart1;
        num2 = typeof(floatpart2) == "undefined" ? num2 : num2 + floatpart2;
        const result = Math.pow(Number(num1), Number(num2))
        return result.toString();
    });
    str = str.replace(/(\d+\.)?(\d+)(\%)(\d+)(\.\d+)?/g,(_, num1, floatpart1, option , num2, floatpart2) => { 
        num1 = typeof(num1) == "undefined" ? floatpart1 : num1 + floatpart1;
        num2 = typeof(floatpart2) == "undefined" ? num2 : num2 + floatpart2;
        let result = Number(num1) * (Number(num2) / 100)
        return result.toString();
    });
    return str;
}
function calculate() {
    let text = document.getElementById("result").getAttribute("value")
    if(text.charAt(0) == "-" && document.querySelector("#content_before").innerHTML != ""){
        document.querySelector("#content_before").innerHTML += "(" + text + ")";
    }else{
        document.querySelector("#content_before").innerHTML += text;
    }
    let input = document.querySelector("#content_before").innerHTML;


    try{
        input = stringValidator(input)
    }catch (error) {
        document.getElementById("result").setAttribute("value", "Error");
        return;
    }


    if (input === null || input === "0") return;

    try {
        let expression = input
            .replace(/÷/g, "/")
            .replace(/x/g, "*")
            .replace(/√\(/g, "Math.sqrt(");
        const openParens = (expression.match(/\(/g) || []).length;
        const closeParens = (expression.match(/\)/g) || []).length;
        expression += ")".repeat(openParens - closeParens);

        result = eval(expression);
        document.getElementById("result").setAttribute("value", result);
        history.push(input + " = " + result);
        updateHistory();
    } catch (error) {
        document.getElementById("result").setAttribute("value", "Error");
    }
}

function updateHistory() {
    let historySidebar = document.getElementById("HistorySidebar");
    let historyList = document.getElementById("historyList");

    historyList.innerHTML = '';

    history.forEach(entry => {
        let listItem = document.createElement("li");
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}


function copyToClipboard(){
    const text = history.join(";");
    navigator.clipboard.writeText(text)
}

async function insertFromClipboard(){
    let text = await navigator.clipboard.readText();
    history = text.split(";")
    updateHistory()
}

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