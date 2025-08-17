'use strict';

const populationsEl = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total');
const averagePopulationEl = document.querySelector('.average');

let total = 0;

populationsEl.forEach((el) => {
  const num = Number.parseInt(el.textContent.replaceAll(',', ''));

  total += num;
});

totalPopulationEl.textContent = total.toLocaleString();

averagePopulationEl.textContent = Math.round(
  total / populationsEl.length,
).toLocaleString();
