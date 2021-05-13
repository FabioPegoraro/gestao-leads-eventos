const ModalAddLead = {
    open() {
        document.querySelector(".modal-add-lead").classList.add("active");
    },
    close() {
        document.querySelector(".modal-add-lead").classList.remove("active");
    },
    statusLead() {

    },
};

const ModalEditLead = {
    open() {
        document.querySelector(".modal-edit-lead").classList.add("active");
    },
    close() {
        document.querySelector(".modal-edit-lead").classList.remove("active");
    },
    editar() {

    },
};

const leads = [{
    id: 1,
    name: "Maise",
    tipoDeEvento: "Aniversário",
    numeroConvidados: 50,
    dataDoEvento: "09/12/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "10/05/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Fechado",
    statusCard: 'fechado',
    observação: "TEste de textArea, será que deu certo?",

},
{
    id: 2,
    name: "Edson",
    tipoDeEvento: "Aniversário",
    numeroConvidados: 80,
    dataDoEvento: "25/07/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "01/06/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Negociação",
    statusCard: 'negociacao',
    observação: "TEste de textArea, será que deu certo?",
},
{
    id: 3,
    name: "Edna",
    tipoDeEvento: "Casamento",
    numeroConvidados: 200,
    dataDoEvento: "26/10/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "25/08/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Follow",
    statusCard: 'follow',
    observação: "TEste de textArea, será que deu certo?",
},
{
    id: 4,
    name: "Fabio",
    tipoDeEvento: "Confraternização",
    numeroConvidados: 20,
    dataDoEvento: "19/05/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "10/05/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Fechamento",
    statusCard: 'fechamento',
    observação: "TEste de textArea, será que deu certo?",
},
{
    id: 5,
    name: "Logan",
    tipoDeEvento: "Confraternização",
    numeroConvidados: 10,
    dataDoEvento: "02/05/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "06/05/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Fechado",
    statusCard: 'fechado',
    observação: "TEste de textArea, será que deu certo?",
},
{
    id: 6,
    name: "Felipe",
    tipoDeEvento: "Casamento",
    numeroConvidados: 35,
    dataDoEvento: "06/05/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "06/05/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Fechado",
    statusCard: 'fechado',
    observação: "TEste de textArea, será que deu certo?",
},
{
    id: 6,
    name: "Samuel",
    tipoDeEvento: "Casamento",
    numeroConvidados: 150,
    dataDoEvento: "06/05/2021",
    telefone: 11947728801,
    localDoEvento: "São Paulo",
    email: "fabio@teste.com.br",
    dataPrimeiroContato: "01/04/21",
    dataultimoContato: "28/04/21",
    proximoContato: "06/05/21",
    enviadoPor: "whatsApp",
    canalQueVeio: "site",
    comoNosConheceu: "google",
    status: "Follow",
    statusCard: 'follow',
    observação: "TEste de textArea, será que deu certo?",
},

];

const DOM = {

    criarCard: document.querySelector("#cards-leads"),

    criarLead(leads, index) {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = DOM.innerHTMLCard(leads)

        DOM.criarCard.appendChild(card)
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
                <h3>${leads.dataDoEvento}</h3>
            </div>

            <div class="card-status ${leads.statusCard}">
                <h3>${leads.status}</h3>
            </div>

            <div class="cardNextContato">
                <h3>${leads.proximoContato}</h3>
            </div>

            <div class="card-Button">
                <a href="#" class="buttonEditar" onclick="ModalEditLead.open()"><img src="./img/edit-24.svg"
                alt=""></a>
                <a href="#" class="buttonExcluir" onclick="Cards.excluirCard()"><img src="./img/trash-24.svg"
                alt="Excluir Lead"></a>
            </div>

            `

        return html;
    },


};

const Cardkamban = {

    updateCardKamban(element) {

        const totalLeads = element

        let totalFollow = []
        let totalNegociacao = []
        let totalFechamento = []
        let totalFechado = []

        for (i = 0; i < leads.length; i++) {
            const element = leads[i].status;
            if (element === "Follow") {
                totalFollow.push(element)
            }else if(element === "Negociação"){
                totalNegociacao.push(element)
            }else if(element === "Fechamento"){
                totalFechamento.push(element)
            }else{
                totalFechado.push(element)
            }
        }

        document.getElementById('totalLeads').innerHTML = totalLeads.length
        document.getElementById('totalFollow').innerHTML = totalFollow.length
        document.getElementById('totalNegociacao').innerHTML = totalNegociacao.length
        document.getElementById('totalFechamento').innerHTML = totalFechamento.length
    },

}

Cardkamban.updateCardKamban(leads)

const Cards = {
    adicionarCard() {
        leads.forEach((element) => {
            DOM.criarLead(element)
        });
    },
    excluirCard() {
        //Excluir o card
        alert("Excluir Card");
    },
};

Cards.adicionarCard()

