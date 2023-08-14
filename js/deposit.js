document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);
// add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
// get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// calculate current total  balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// Set the Balance Total
    balanceTotalElement.innerText = currentBalanceTotal;
// Clear The Deposit Field
    depositField.value = '';
})