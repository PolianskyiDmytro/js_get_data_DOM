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

let totalResult = '';
let averageResult = '';

let j = 0;

for (let i = totalPopulation.length - 1; i >= 0; i--) {
  totalResult = totalPopulation[i] + totalResult;
  j++;

  if (j % 3 === 0 && i !== 0) {
    totalResult = ',' + totalResult;
  }
}

j = 0;

for (let i = averagePopulation.length - 1; i >= 0; i--) {
  averageResult = averagePopulation[i] + averageResult;
  j++;

  if (j % 3 === 0 && i !== 0) {
    averageResult = ',' + averageResult;
  }
}

document.querySelector('span.total-population').textContent = totalResult;

document.querySelector('span.average-population').textContent = averageResult;
