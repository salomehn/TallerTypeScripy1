import { series } from "./data.js";
import { Serie } from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const averageElement: HTMLElement = document.getElementById("average")!;

function renderSeriesInTable(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(seriesList: Serie[]): number {
  let totalSeasons: number = 0;
  seriesList.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return totalSeasons / seriesList.length;
}

renderSeriesInTable(series);

averageElement.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;