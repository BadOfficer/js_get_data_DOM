'use strict';

const populationsEl = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

let total = 0;
let count = 0;

populationsEl.forEach((el) => {
  const num = Number.parseInt(el.textContent.replaceAll(',', ''));

  if (!isNaN(num)) {
    total += num;
    count++;
  }
});

totalPopulationEl.textContent = formatNum(total);

averagePopulationEl.textContent =
  count !== 0 ? formatNum(Math.round(total / count)) : 0;

function formatNum(num, separator = ',') {
  const numToStr = String(num);
  let result = '';

  for (let i = 0; i < numToStr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result = separator + result;
    }

    result = numToStr[numToStr.length - i - 1] + result;
  }

  return result;
}
