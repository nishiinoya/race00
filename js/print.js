let result = 0
function printNumber(number){
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if(text === null) return;
    if(text.match(/\d+$/)!== null && text.match(/\d+$/)[0] == "0"){
        text = text.replace(/\d+$/, "")
    }
    text += number
    input.setAttribute("value", text)
}
function printPoint(){
    let input = document.getElementById("result").getAttribute("value")
    if(input === null) return;
    const regex = /[\d\.]+$/
    let number = input.match(regex)[0]
    if(number.includes(".")) return;
    document.getElementById("result").setAttribute("value", input + ".")
}
function printOperation(operation){
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if(text === null) return;
    if(text.match(/\d$/) === null) return;
    text += operation
    input.setAttribute("value", text)
}
function cleanInput(){
    document.getElementById("result").setAttribute("value", "0")
}
function printNegative(){
    let input = document.getElementById("result")
    let text = input.getAttribute("value");
    if(text === null) return;
    if(text.match(/\d+$/) === null) return;
    let number = text.match(/\d+$/)[0]
    if(number == "0") return;
    text = text.replace(/\d+$/, "")
    input.setAttribute("value", text + "(-" + number + ")")
}