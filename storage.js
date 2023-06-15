const CACHE_KEY="calculator_history"

function checkForStorage(){
    return typeof(Storage) !== "undefined"
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
            if (localStorage.getItem(CACHE_KEY) == NULL) {
            historyData = [];
        } else {
            historyData = JSON.parseFloat(localStorage(CACHE_KEY));
        }
        historyData.unshift(data);

        if (historyData.legth > 5) {
            historyData.pop();
        }

    localStorage.setItem(CACHE_KEY, JSON, stringify(historyData));
    }
}

function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return[];
    }
}
function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
            historyList.innerHTML = "";
    
     for (let history of historyData) {

     let row = document.createElement('tr');
     row.innerHTML = "<td>" + history.firstNumber + "</td>";
     row.innerHTML += "<td>" + history.operator + "</td>";
     row.innerHTML += "<td>" + history.secondNumber + "</td>";
     row.innerHTML += "<td>" + history.result + "</td>";
    
            historyList.appendChild(row);
   }
}
 function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
     }
    
     let result = 0;
     if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
            } else {
             result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
             }
            
            const history = {
             firstNumber: calculator.firstNumber,
             secondNumber: calculator.displayNumber,
             operator: calculator.operator,
             result: result
        }
             putHistory(history);
             calculator.displayNumber = result;
             renderHistory();
    }