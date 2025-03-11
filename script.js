//----------------------------------------------------filtrar evento---------------------------------------------------
function filtrarEventos() {
    let input = document.getElementById("filtro").value.toLowerCase();
    let eventos = document.querySelectorAll(".evento");

    eventos.forEach(evento => {
        let descricao = evento.getAttribute("descricao").toLowerCase();
        if (descricao.includes(input)) {
            evento.style.display = "block";
        } else {
            evento.style.display = "none";
        }
    });
}

//-----------------------------------------------------cadastrar evento------------------------------------------------------
class Evento {
    constructor(nome, descricao, data, local) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.local = local;
    }
}

const eventos = [];

document.getElementById("eventoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;

    const novoEvento = new Evento(nome, descricao, data, local);
    eventos.push(novoEvento);

    atualizarListaEventos();
    this.reset();
});

function atualizarListaEventos() {
    const eventosContainer = document.getElementById("eventosContainer");
    const eventList = document.getElementById("eventList");

    eventosContainer.innerHTML = "";
    eventList.style.display = eventos.length > 0 ? "block" : "none"; // Mostra ou esconde a lista de eventos

    eventos.forEach((evento, index) => {
        const eventoItem = document.createElement("div");
        eventoItem.classList.add("event-item");
        eventoItem.innerHTML = `<strong>${evento.nome}</strong>`;

        const dataArray = evento.data.split("-");
        const dataFormatada = new Date(dataArray[0], dataArray[1] - 1, dataArray[2]);

        // Formata a data para PT-BR (DD/MM/YYYY)
        const dataPTBR = dataFormatada.toLocaleDateString("pt-BR");
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = `<p><strong>Descrição:</strong> ${evento.descricao}</p>
                             <p><strong>Data:</strong> ${dataPTBR}</p>
                             <p><strong>Local:</strong> ${evento.local}</p>`;
        eventoItem.appendChild(tooltip);
        eventosContainer.appendChild(eventoItem);
    });
}