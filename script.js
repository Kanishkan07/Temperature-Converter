const input = document.getElementById('temperatureInput');
const resultDiv = document.getElementById('result');
const radios = document.getElementsByName('conversionType');

function convertTemperature() {
  const temp = parseFloat(input.value);
  if (isNaN(temp)) {
    resultDiv.textContent = "Result: Please enter a valid number.";
    return;
  }

  const conversionType = Array.from(radios).find(r => r.checked).value;
  let result;

  if (conversionType === "CtoF") {
    result = (temp * 9/5) + 32;
    resultDiv.textContent = `Result: ${result.toFixed(2)} °F`;
  } else {
    result = (temp - 32) * 5/9;
    resultDiv.textContent = `Result: ${result.toFixed(2)} °C`;
  }
}

input.addEventListener('input', convertTemperature);
radios.forEach(radio => radio.addEventListener('change', convertTemperature));