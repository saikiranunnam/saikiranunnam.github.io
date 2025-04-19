(function () {
  const billInput = document.getElementById('billTotal');
  const tipSlider = document.getElementById('tipSlider');
  const tipPercent = document.getElementById('tipPercent');
  const tipAmount = document.getElementById('tipAmount');
  const totalWithTip = document.getElementById('totalWithTip');
  const totalWithTax = document.getElementById('totalWithTax');
  const totalWithTipTax = document.getElementById('totalWithTipTax');
  const currencySelect = document.getElementById('currency');
  const convertedTotal = document.getElementById('convertedTotal');
  const currencySymbols = document.querySelectorAll('.currency-symbol');

  const TAX_RATE = 0.11;
  const conversionRates = {
    usd: 1,
    inr: 85,
    eur: 0.95
  };

  const symbolMap = {
    usd: '$',
    inr: '₹',
    eur: '€'
  };

  // Create error message element
  const errorMessage = document.createElement('span');
  errorMessage.className = 'error-message';
  errorMessage.textContent = 'Please enter a valid positive number';
  billInput.parentNode.insertBefore(errorMessage, billInput.nextSibling);

  function calculateTip() {
    let bill = parseFloat(billInput.value) || 0;
    let tipPercentValue = parseInt(tipSlider.value);

    if (bill === 0) {
      tipPercent.value = `${tipPercentValue}%`;
      tipAmount.value = '0.00';
      totalWithTip.value = '0.00';
      totalWithTax.value = '0.00';
      totalWithTipTax.value = '0.00';
      convertCurrency(0);
      return;
    }

    if (isNaN(bill) || bill < 0) {
      clearFields();
      return;
    }

    let tax = bill * TAX_RATE;
    let withTax = bill + tax;
    let tip = withTax * (tipPercentValue / 100);
    let withTip = withTax + tip;

    tipPercent.value = `${tipPercentValue}%`;
    tipAmount.value = tip.toFixed(2);
    totalWithTip.value = (bill + (bill * (tipPercentValue / 100))).toFixed(2);
    totalWithTax.value = withTax.toFixed(2);
    totalWithTipTax.value = withTip.toFixed(2);

    convertCurrency(withTip);
  }

  function clearFields() {
    tipPercent.value = '';
    tipAmount.value = '';
    totalWithTip.value = '';
    totalWithTax.value = '';
    totalWithTipTax.value = '';
    convertedTotal.textContent = '';
  }

  function convertCurrency(amount) {
    const selectedCurrency = currencySelect.value;
    const rate = conversionRates[selectedCurrency];
    const converted = amount * rate;
    const symbol = symbolMap[selectedCurrency];

    convertedTotal.textContent = `Total with Tip & Tax in ${selectedCurrency.toUpperCase()}: ${symbol}${converted.toFixed(2)}`;

    currencySymbols.forEach(span => {
      span.textContent = symbol;
    });
  }

  billInput.addEventListener('input', () => {
    const value = billInput.value;
    // Allow numbers, one decimal point, and empty string
    const isValid = value === '' || /^\d*\.?\d*$/.test(value);

    if (!isValid) {
      billInput.classList.add('error');
      errorMessage.style.display = 'block';
      clearFields();
    } else {
      billInput.classList.remove('error');
      errorMessage.style.display = 'none';
      calculateTip();
    }
  });

  tipSlider.addEventListener('input', calculateTip);

  currencySelect.addEventListener('change', () => {
    const currentTotal = parseFloat(totalWithTipTax.value) || 0;
    updateCurrencySymbols();
    convertCurrency(currentTotal);
  });

  function updateCurrencySymbols() {
    const selectedCurrency = currencySelect.value;
    const symbol = symbolMap[selectedCurrency];
    currencySymbols.forEach(span => {
      span.textContent = symbol;
    });
  }

  updateCurrencySymbols();
  calculateTip();
})();
