const calculateInvestment = () => {
   let investAmt = document.getElementById('investamt').value;
    // ①  How much are you inversting
   let investYr = document.getElementById('investyr').value;
    // ② How many years will you be investing?
    let interestRate = document.getElementById('intrate').value;
    //③ What is the interest rate?


    if (investAmt === "" || investYr == 0 || interestRate === "") {
        alert("Please enter values");
        return;
    }

    
    //check to see if this input is empty or less than or equal to 1
    if(interestRate === "" || interestRate <= 1){
        interestRate = 1;

        document.getElementById('yieldamount').style.display = 'block';
        }else{ 
        document.getElementById('yieldamount').style.display = 'block';    
    }


    let total = [investAmt * (interestRate/100) * investYr];
    var grandTotal = parseFloat(total) + parseFloat(investAmt);

    //round to two decimal places
    grandTotal = Math.round(grandTotal * 100) / 100;

    //next line allows us to always have two digits after decimal point
    grandTotal = grandTotal.toFixed(2);

    //display the tip
    document.getElementById('investyield').style.display = 'block';
    document.getElementById('yield').innerHTML = grandTotal;

}

//click to call function
document.getElementById('calcualte').onclick = function(){
    calculateInvestment();
};



