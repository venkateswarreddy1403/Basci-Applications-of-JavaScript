function calculate() {
    let billAmount = parseInt(document.getElementById("billAmount").value);
    let tipPercentage = parseInt(document.getElementById("percentageTip").value);

    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = '';

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage <= 0) {
        errorMessage.textContent = "Please enter valid numbers for both fields.";
        return;
    }
    let calculatedTip = (tipPercentage / 100) * billAmount;
    document.getElementById("tipAmount").value = Math.round(calculatedTip);

    let totalAmount = billAmount + calculatedTip;
    document.getElementById("totalAmount").value = Math.round(totalAmount);
}
