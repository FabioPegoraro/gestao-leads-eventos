const Modal = {
    open() {
        document.querySelector(".modal-overlay").classList.toggle("active");
    },
    close() {
        document.querySelector(".modal-overlay").classList.toggle("active");
    },
    statusLead(){

    },
};


const leads = [{
        id: 1,
        name: "Maise",
        numeroConvidados: 50,
        dataFesta: "09/12/2021",
        status: "Fechado",
        statusCard:'fechado',
        proximoContato: "10/05/21",
    },
    {
        id: 2,
        name: "Edson",
        numeroConvidados: 80,
        dataFesta: "25/07/2021",
        status: "Negociação",
        statusCard:'negociacao',
        proximoContato: "01/06/21",
    },
    {
        id: 3,
        name: "Edna",
        numeroConvidados: 200,
        dataFesta: "26/10/2021",
        status: "Follow",
        statusCard:'follow',
        proximoContato: "25/08/21",
    },
    {
        id: 4,
        name: "Fabio",
        numeroConvidados: 20,
        dataFesta: "19/05/2021",
        status: "Fechamento",
        statusCard:'fechamento',
        proximoContato: "10/05/21",
    },
    {
        id: 5,
        name: "Pegoraro",
        numeroConvidados: 10,
        dataFesta: "06/05/2021",
        status: "Fechado",
        statusCard:'fechado',
        proximoContato: "06/05/21",
    },
];

const Cards = {
    adicionarLead() {
        leads.forEach((element) => {
            console.log(element);
        });
    },
    editarLead() {
        //Editar o card

        alert("Editar Card");
    },
    excluirLead() {
        //Excluir o card
        alert("Excluir Card");
    },
};

const DOM = {
    addCard: document.querySelector("#cards-leads"),

    addLead(leads, index) {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = DOM.innerHTMLCard(leads)

        DOM.addCard.appendChild(card)
    },

    innerHTMLCard(leads) {   

        const html = `
            <div class="idCliente">
                <p>${leads.id}</p>
            </div>

            <div class="cardName">
                <h3>${leads.name}</h3>
            </div>

            <div class="cardNumberConvidados">
                <h3>${leads.numeroConvidados}</h3>
            </div>

            <div class="cardDateFesta">
                <h3>${leads.dataFesta}</h3>
            </div>

            <div class="card-status ${leads.statusCard}">
                <h3>${leads.status}</h3>
            </div>

            <div class="cardNextContato">
                <h3>${leads.proximoContato}</h3>
            </div>

            <div class="card-Button">
                <a href="#" class="buttonEditar" onclick="Cards.editarLead()"><img src="./img/edit-24.svg"
                alt=""></a>
                <a href="#" class="buttonExcluir" onclick="Cards.excluirLead()"><img src="./img/trash-24.svg"
                alt="Excluir Lead"></a>
            </div>

            `

            
        return html;
    },
};

leads.forEach(element => {
    DOM.addLead(element)
});

