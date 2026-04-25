function addToDisplay(value) {
    document.getElementById("screen").value += value;
}

function clearDisplay() {
    document.getElementById("screen").value = "";
}

function compute() {
    let exp = document.getElementById("screen").value;
    try {
        document.getElementById("screen").value = eval(exp);
    } catch {
        document.getElementById("screen").value = "Error";
    }
}