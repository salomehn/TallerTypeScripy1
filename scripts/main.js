import { series } from "./data.js";
import { Serie } from "./serie.js";
const tableBody = document.getElementById("series-table-body");
const averageElement = document.getElementById("average");
const detailElement = document.getElementById("series-detail");
function renderSeries() {
    series.forEach((serie) => {
        let row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        const link = row.querySelector(".serie-link");
        link.addEventListener("click", (event) => {
            event.preventDefault();
            showDetail(serie);
        });
        tableBody.appendChild(row);
    });
}
function calcularPromedio() {
    let total = 0;
    series.forEach((serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}
function mostrarPromedio() {
    averageElement.innerHTML = `Seasons average: ${calcularPromedio()}`;
}
function showDetail(serie) {
    detailElement.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank">${serie.webpage}</a>
      </div>
    </div>
  `;
}
renderSeries();
mostrarPromedio();
const firstSerie = series[0];
if (firstSerie) {
    showDetail(firstSerie);
}
//# sourceMappingURL=main.js.map