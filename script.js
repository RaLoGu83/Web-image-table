function pleaseSelectRows() {
    alert("Please select a number of rows on the dropdown button");
}

const btn5 = document.getElementById("btn5");
const btn10 = document.getElementById("btn10");
const btn20 = document.getElementById("btn20");
const btn50 = document.getElementById("btn50");
const btnClear = document.getElementById("btnClear");
const tbody = document.querySelector('table tbody');
const tr = document.querySelector("tr");
const btnStats1 = document.getElementById("btnStats1");
const btnStats0 = document.getElementById("btnStats0");



// Al escuchar este evento se ejecuta la función "Clear"
btnClear.addEventListener("click", Clear);

// Función para limpiar la tabla
function Clear() {
    tbody.innerHTML = "";
}

btn5.addEventListener("click", () => numRows(5)); // Arrow Function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
btn10.addEventListener("click", () => numRows(10));
btn20.addEventListener("click", () => numRows(20));
btn50.addEventListener("click", () => numRows(50));

function numRows(num) { // Función que recibe el número de alguno de los botones de arriba
    Clear();   // Limpia el tbody antes de empezar el bucle para que no se sumen, sino que reestablezca el número de filas (así si pulsas 5 muchas veces no se sumarán de 5 en 5 las filas)
    for (let i = 1; i <= num; i++) {

        // Crea el elemento
        const rows = document.createElement("tr");

        // Configura el elemento
        rows.innerHTML = `
        <th scope="row">${i}</th>
        <td><img loading="lazy" src="https://picsum.photos/200?random=${i}"></td>
        <td>Description ${i}</td>
        `;

        // Spawnea el elemento
        tbody.appendChild(rows);
    }
}

btnStats1.addEventListener("click", function () {
    selGraph(1);
});

btnStats0.addEventListener("click", function () {
    selGraph(0);
});

const statsA = {
    bar: {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany']
    },
    donut: [44, 55, 41, 17, 15]
};

const statsB = {
    bar: {
        data: [1400, 1000, 48, 400, 140, 880, 69, 67, 120, 180],
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany']
    },
    donut: [5, 55, 20, 87]
};

let BarChart = new ApexCharts(
    document.querySelector("#BarChart"),
    {
        series: [{
            data: statsA.bar.data
        }],
        chart: {
            type: 'bar',
            height: 350,
            width: 700
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: statsA.bar.categories
        }
    }
);

BarChart.render();

let DonutChart = new ApexCharts(
    document.querySelector("#DonutChart"),
    {
        series: statsA.donut,
        chart: {
            type: 'donut',
            height: 300,
            width: 500
        }
    }
);

DonutChart.render();

function selGraph(n) {

    if (n == 1) {

        BarChart.updateSeries([
            { data: statsA.bar.data }
        ]);

        BarChart.updateOptions({
            xaxis: {
                categories: statsA.bar.categories
            }
        });

        DonutChart.updateSeries(statsA.donut);

    } else {

        BarChart.updateSeries([
            { data: statsB.bar.data }
        ]);

        BarChart.updateOptions({
            xaxis: {
                categories: statsB.bar.categories
            }
        });

        DonutChart.updateSeries(statsB.donut);
    }
}

pleaseSelectRows();
