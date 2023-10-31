const buttonsContainer = document.querySelector('.buttons-container');
const previousDisplay = document.querySelector('.previous-display');
const currentDisplay = document.querySelector('.current-display');


function printPreviousDisplay(num) {
    previousDisplay.innerText=num;
};


function printCurrentDisplay(num) {
    if (num == "") {
        currentDisplay.innerText=num;
    } else {
        if(num=="-"){
            return "";
        }
        let n=Number(num);
        let value= n.toLocaleString("en");
        currentDisplay.innerText=value;
    }
};

function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
};

buttonsContainer.addEventListener('click', (e) => {

    if (e.target.className=="button operator"){
        if(e.target.id=="clear"){
            
            printPreviousDisplay("");
            printCurrentDisplay("");
        } else if(e.target.id == "backspace"){
            let output=reverseNumberFormat(currentDisplay.innerText).toString();
            if(output){
                output= output.substring(0, output.length-1);
                printCurrentDisplay(output); 
            } 

        } else{
            output = currentDisplay.innerText;
            previousOutput = previousDisplay.innerText;
            if(output==""&& previousOutput != ""){
                if(isNaN(previousOutput[previousOutput.length-1])){
                    previousOutput=previousOutput.substr(0,previousOutput.length-1);
                }
            }
            if(output!="" || previousOutput!=""){
                output= output==""?
                output:reverseNumberFormat(output);
                previousOutput=previousOutput+output;
                if(e.target.id=="="){
                    let result= eval(previousOutput);
                    printCurrentDisplay(result);
                    printPreviousDisplay("");
                }
                else{
                    previousOutput=previousOutput+e.target.id;
                    printPreviousDisplay(previousOutput);
                    printCurrentDisplay("");
                }
            }
        }
    } 
    if (e.target.className=="button number" || e.target.className=="button number number-zero"){
        let output = reverseNumberFormat(currentDisplay.innerText);
        if(output !=NaN){
            output = output + e.target.id;
            printCurrentDisplay(output);
        }
    }
});

    

// function getCurrentDisplay() {
//     return currentDisplay.innerText;
// };

// function getFormattedNumber(num){
//     if(num=="-"){
//         return "";
//     }
//     let n=Number(num);
//     let value= n.toLocaleString("en");
//     return value;
// };

// function getPreviousDisplay() {
//     return previousDisplay.innerText;
// };

// clickedButton=e.target.innerText;
    // currentDisplay.innerText +=clickedButton;

    // while (clickedButton !== "="){
    //     currentDisplay.innerText +=clickedButton;
    // }