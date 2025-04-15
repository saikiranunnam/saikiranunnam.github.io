document.getElementById('tipForm').addEventListener('input', function () {
  const bill = parseFloat(document.getElementById('billTotal').value);
  const tipPercent = parseInt(document.getElementById('tipRange').value);
  const error = document.getElementById('billError');

  if (isNaN(bill) || bill < 0) {
    error.textContent = 'Please enter a valid positive number.';
    clearFields();
    return;
  } else {
    error.textContent = '';
  }

  document.getElementById('tipPercent').value = tipPercent + '%';
  const tipAmount = bill * (tipPercent / 100);
  const totalWithTip = bill + tipAmount;
  const totalWithTax = bill > 0 ? bill * 1.11 : 0;

  document.getElementById('tipAmount').value = tipAmount.toFixed(2);
  document.getElementById('totalWithTip').value = totalWithTip.toFixed(2);
  document.getElementById('totalWithTax').value = totalWithTax.toFixed(2);

  const currency = document.getElementById('currency').value;
  const converted = document.getElementById('convertedAmount');
  if (currency === 'INR') {
    converted.textContent = 'INR ₹' + (totalWithTip * 83.15).toFixed(2);
  } else if (currency === 'EUR') {
    converted.textContent = '€' + (totalWithTip * 0.91).toFixed(2);
  } else {
    converted.textContent = '';
  }

  if (bill === 0) {
    clearFields();
  }
});

function clearFields() {
  document.getElementById('tipPercent').value = '';
  document.getElementById('tipAmount').value = '';
  document.getElementById('totalWithTip').value = '';
  document.getElementById('totalWithTax').value = '';
  document.getElementById('convertedAmount').textContent = '';
}
