const resultDisplay = document.getElementById("resultDisplay");
const buttons = document.querySelectorAll('button');
let result = 0;

buttons.forEach(function(element){
    element.onclick = function(){
        if(element.id == "AC"){
            resultDisplay.textContent = "0";
            resultDisplay.style.color = "white";
        }
        else if(element.id == "="){
            resultDisplay.textContent = eval(resultDisplay.innerHTML)
            resultDisplay.style.color = "rgb(67, 255, 50)";
            console.log(eval(resultDisplay.innerHTML));
        }
        else{
            if(resultDisplay.textContent == "0"){
                resultDisplay.textContent = element.id;
                if(resultDisplay.textContent == "*" || resultDisplay.textContent == "/")
                resultDisplay.textContent = `0${element.id}`;
                  
            }
            else{
                resultDisplay.textContent += element.id;  
            }  
        resultDisplay.style.color = "white";
        }

    }
})
