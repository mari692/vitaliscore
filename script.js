
if (localStorage.getItem("total") === null) {
    localStorage.setItem("total", 48);
}

if (localStorage.getItem("reservada") === null) {
    localStorage.setItem("reservada", 0);
}

function atualizar() {

    let total = Number(localStorage.getItem("total"));
    let reservada = Number(localStorage.getItem("reservada"));

    let resta = total - reservada;

    let elementoFicha = document.getElementById("ficha");
    let elementoReservadas = document.getElementById("reservadas");

    if (elementoFicha) {
        elementoFicha.innerText = resta;
    }

    if (elementoReservadas) {
        elementoReservadas.innerText = reservada;
    }

    verificarFichas(resta);
}

function verificarFichas(restantes) {

    let aviso = document.getElementById("aviso");

    if (!aviso) return;

    if (restantes === 0) {
        aviso.innerText = "Nenhuma ficha disponível!";
        aviso.style.color = "red";

    } else if (restantes <= 2) {
        aviso.innerText = `Atenção! Apenas ${restantes} fichas restantes!`;
        aviso.style.color = "red";

    } else if (restantes <= 5) {
        aviso.innerText = `Restam apenas ${restantes} fichas!`;
        aviso.style.color = "blue";

    } else {
        aviso.innerText = `${restantes} fichas disponíveis.`;
        aviso.style.color = "green";
    }
}

window.onload = atualizar;
window.addEventListener("storage", atualizar);
