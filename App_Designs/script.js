function getHistory(){
    return document.getElementById("history-value").innerText;
}

function setHistory(calculation){
    document.getElementById("history-value").innerText=calculation ;
}

function clearHistory(){
    document.getElementById("history-value").innerText="";
}

function clearOutput(){
    document.getElementById("output-value").innerText="";
}

 function setOutput(result){
    if(result == ""){
        document.getElementById("output-value").innerText=result;
    } else {
        document.getElementById("output-value").innerText=getFormattedNumber(result);
    }

 }

 function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

 function getOutput(){
     return document.getElementById("output-value").innerText;
 }

 function getFormattedNumber(num){
    if(num == "-")
        return "";
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
 }

 let operator = document.getElementsByClassName("operator");
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click',function (){
        if(this.id == "clear"){
            clearHistory();
            clearOutput();
        }
        if(this.id == "backspace"){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length - 1);
                setOutput(output);
            }
        }
        else {
            let output = getOutput();
            let history = getHistory();
            if(output == "" && history == ""){
                if(isNaN(history[history.length - 1]))
                    history = history.substr(0, history.length - 1);
            }
            if(output != "" || history != ""){
                output = output == "" ? output:reverseNumberFormat(output);
                history = history + output;
                if(this.id == "equals"){
                    let result = eval(history);
                    setOutput(result);
                    clearHistory();
                }
                else {
                    history = history + this.id;
                    setHistory(history);
                    clearOutput();
                }
            }
        }
    });
}

let number = document.getElementsByClassName("number");
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click',function (){
        let output = reverseNumberFormat(getOutput());
        if(output != null){
            output = output + this.id;
            setOutput(output);
        }
    });
}