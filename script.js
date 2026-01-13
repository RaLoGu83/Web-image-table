function pleaseSelectRows(){
    alert("Please select a number of rows on the dropdown button");
}


const btn5 = document.getElementById("btn5");
const btn10 = document.getElementById("btn10");
const btn20 = document.getElementById("btn20");
const btn50 = document.getElementById("btn50");
const btnClear = document.getElementById("btnClear");
const tbody = document.querySelector('table tbody');
const tr = document.querySelector("tr");

// Al escuchar este evento se ejecuta la función "Clear"
btnClear.addEventListener("click", Clear);

// Función para limpiar la tabla
function Clear() {
    tbody.innerHTML = "";
}

btn5.addEventListener("click", ()=>numRows(5)); // Arrow Function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
btn10.addEventListener("click", ()=>numRows(10));
btn20.addEventListener("click", ()=>numRows(20));
btn50.addEventListener("click", ()=>numRows(50));

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

pleaseSelectRows();