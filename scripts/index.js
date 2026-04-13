import { series } from "./data.js";
import { Serie } from "./serie.js";
var listaSeries = [];
function cargarDatos() {
    series.map(function (serie) {
        listaSeries.push(serie);
    });
}
cargarDatos();
console.log(listaSeries);
//# sourceMappingURL=index.js.map