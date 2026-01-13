// Declaramos variables para boton clear y boton 0 y creamos una funcion que al pulsar "Clear" seleccione el boton 0 automaticamente
const clear = document.getElementById('clear');
const btn0 = document.getElementById('btnradio0');

// Declaramos variables para las gráficas
let barChart = null;
let donutChart = null;

// Declaramos variables para los demás botones de radio y la tabla
const btn5 = document.getElementById('btnradio1');
const btn10 = document.getElementById('btnradio2');
const btn20 = document.getElementById('btnradio3');
const btn50 = document.getElementById('btnradio4');
const table = document.querySelector('table tbody');

// Función para poner 0 imagenes en la tabla y eliminar las gráficas
function clearTable() {
    btn0.checked = true;
    table.innerHTML = '';

    // Eliminar gráfica de barras
    if (barChart) {
        barChart.destroy();
        barChart = null;
    }

    // Eliminar gráfica donut
    if (donutChart) {
        donutChart.destroy();
        donutChart = null;
    }

    // Limpiar contenedor
    document.querySelector("#chart").innerHTML = '';
}


// Función para crear filas según el valor del botón pulsado
function createRows(num) {
    table.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${i}</th>
            <td><img src="https://picsum.photos/200?random=${i}"></td>
            <td>Description ${i}</td>
        `;
        table.appendChild(tr); // AppendChild para ir añadiendo filas a la tabla
    }

    // Destruir si ya existen
    if (barChart) barChart.destroy();
    if (donutChart) donutChart.destroy();

    barChart = new ApexCharts(
        document.querySelector("#barChart"),
        {
            series: [{ data: [400,430,448,470,540,580,690,1100,1200,1380] }],
            chart: { type: 'bar', height: 350 },
            plotOptions: {
                bar: { horizontal: true, borderRadius: 4 }
            },
            dataLabels: { enabled: false },
            xaxis: {
                categories: [
                  'South Korea','Canada','UK','Netherlands','Italy',
                  'France','Japan','USA','China','Germany'
                ]
            }
        }
    );
    barChart.render();

    // DONUT CHART
    donutChart = new ApexCharts(
        document.querySelector("#donutChart"),
        {
            series: [44, 55, 41, 17, 15],
            chart: { type: 'donut', width: 350 },
            plotOptions: {
                pie: {
                    donut: { size: '65%' },
                    customScale: 0.9
                }
            }
        }
    );
    donutChart.render();
}

// Declaramos los eventos de cada boton

clear.addEventListener('click', clearTable);

btn0.addEventListener('click', () => {
    clearTable();
});

btn5.addEventListener('click', () => {
    createRows(5);
});

btn10.addEventListener('click', () => {
    createRows(10);
});

btn20.addEventListener('click', () => {
    createRows(20);
});

btn50.addEventListener('click', () => {
    createRows(50);
});

