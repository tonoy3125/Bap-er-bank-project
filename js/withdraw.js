// step : 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step : 2
    const withdrawFeild = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawFeild.value = '';

    if(isNaN(newWithdrawAmount)){
        alert ('Please Provide a Valid Number');
        return
    }

    // step : 3

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step : 4
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if(newWithdrawAmount > previousBalanceTotal){
        alert ('Bap Er Bank a Eto Tk nai');
        return;
    }
    // step : 5
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step : 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step : 7

    withdrawTotalElement.innerText = currentWithdrawTotal
})