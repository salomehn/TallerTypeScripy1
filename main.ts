import { series } from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-table-body")!;
const averageElement: HTMLElement = document.getElementById("average")!;

function renderSeries(): void {
  series.forEach((serie) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${serie.id}</td>
      <td><a href="${serie.webpage}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
    tableBody.appendChild(row);
  });
}

function calcularPromedio(): number {
  let total = 0;

  series.forEach((serie) => {
    total += serie.seasons;
  });

  return total / series.length;
}

function mostrarPromedio(): void {
  averageElement.innerHTML = `Seasons average: ${calcularPromedio()}`;
}

renderSeries();
mostrarPromedio();