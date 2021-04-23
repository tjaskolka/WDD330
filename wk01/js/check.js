function checkNumber() {
    let numberInput = document.getElementById("number").value;
    let whatIsIt = parseInt(numberInput);
    
    if (numberInput != "" && !isNaN(whatIsIt)) {

        
    let remainder = Math.abs(numberInput % 2);

    if (numberInput != 0 && remainder == 0) 
    {
        document.getElementById("even_odd").innerHTML = numberInput + " is even.";
    }
    else if (numberInput != 0 && remainder == 1) {
        document.getElementById("even_odd").innerHTML = numberInput + " is odd.";
    }

    else if (!Number.isInteger(numberInput) && numberInput !=0) {
        document.getElementById("even_odd").innerHTML = "Please enter an integer."
    }
    else {
        document.getElementById("even_odd").innerHTML = "0 is neither even nor odd.";
    }
    


    }


       else {
        document.getElementById("even_odd").innerHTML = "Please enter a number (numeral)."
 
}
}