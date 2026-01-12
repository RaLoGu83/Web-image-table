// Declaramos variables para boton clear y boton 0 y creamos una funcion que al pulsar "Clear" seleccione el boton 0 automaticamente
const clear = document.getElementById('clear');
const btn0 = document.getElementById('btnradio0');
function clearTable() {
    btn0.checked = true;
}
clear.addEventListener('click', clearTable);

// Declaramos variables para los demás botones de radio y la tabla
const btn5 = document.getElementById('btnradio1');
const btn10 = document.getElementById('btnradio2');
const btn20 = document.getElementById('btnradio3');
const btn50 = document.getElementById('btnradio4');
const table = document.querySelector('table tbody');

// Función para poner 0 imagenes en la tabla
function clearTable() {
    btn0.checked = true;
    table.innerHTML = '';
}

// Función para crear filas según el valor del botón pulsado
function createRows(num) {
    table.innerHTML = '';

    for (let i = 1; i <= num; i++) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <th scope="tr">${i}</th>
            <td><img src="https://picsum.photos/200?random=${i}" alt="Random Image ${i}"></td>
            <td>Description for image ${i}</td>
        `;
        table.appendChild(tr);
    }
}

// Declaramos los eventos de cada boton
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

