'use strict';

let population = [...document.querySelectorAll('span.population')];

population = population.map((element) => {
  return Number(element.textContent.split(',').join(''));
});

const totalPopulation = population
  .reduce((sum, pop) => sum + pop, 0)
  .toString();
const averagePopulation = Math.round(
  Number(totalPopulation) / population.length,
).toString();

function numWithCommas(num) {
  let j = 0;
  let result = '';

  for (let i = num.length - 1; i >= 0; i--) {
    result = num[i] + result;
    j++;

    if (j % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  return result;
}

document.querySelector('span.total-population').textContent =
  numWithCommas(totalPopulation);

document.querySelector('span.average-population').textContent =
  numWithCommas(averagePopulation);
