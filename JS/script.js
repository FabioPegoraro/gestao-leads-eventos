const ModalAddLead = {
    open() {
        document.querySelector(".modal-add-lead").classList.add("active");
    },
    close() {
        document.querySelector(".modal-add-lead").classList.remove("active");
    },
};

const ModalEditLead = {
    open() {
        document.querySelector(".modal-edit-lead").classList.add("active");
    },
    close() {
        document.querySelector(".modal-edit-lead").classList.remove("active");
    },
    editar() {},
};

const leads = [{
        codigoCliente: 1001,
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
        status: "Negociação",
        statusCard: "negociacao",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 1051,
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
        statusCard: "negociacao",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 2090,
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
        statusCard: "follow",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 1005,
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
        statusCard: "fechamento",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 1034,
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
        statusCard: "fechado",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 6258,
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
        statusCard: "fechado",
        observação: "TEste de textArea, será que deu certo?",
    },
    {
        codigoCliente: 3625,
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
        statusCard: "follow",
        observação: "TEste de textArea, será que deu certo?",
    }, {
        codigoCliente: 1002,
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
        status: "Negociação",
        statusCard: "negociacao",
        observação: "TEste de textArea, será que deu certo?",
    },
];

const DOM = {

    criarCard: document.querySelector("#cards-leads"),
    cardHeader: document.querySelector(".card-header"),
    // o index está sendo usado para passar a posição do lead no array
    criarNovoCard(leads, index) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = DOM.innerHTMLCard(leads, index);
        card.dataset.index = index

        DOM.criarCard.appendChild(card);
    },

    innerHTMLCard(leads, index) {


        const html = `
            <div class="codigoCliente" >
                <p>${leads.codigoCliente}</p>
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
                <a href="#" class="buttonExcluir" onclick="Cards.removeLead(${index})"><img src="./img/trash-24.svg"
                alt="Excluir Lead"></a>
            </div>

            `;

        return html;
    },

    clearCards() {
        DOM.cardHeader.innerHTML = "Deu certo"
        //pega a div e deixa ela vazia
        DOM.criarCard.innerHTML = `<div class="card-header">
        <div class="codigoCliente">
            <h4>Código</h4>
        </div>
        <div class="name">
            <h4>Cliente</h4>
        </div>

        <div class="numberConvidados">
            <h4>Nº de Convidados</h4>
        </div>

        <div class="dateFesta">
            <h4>Data do Evento</h4>
        </div>

        <div class="status">
            <h4>Status</h4>
        </div>

        <div class="nextContato">
            <h4>Proximo Contato</h4>
        </div>
    </div>`;
    },
};

const Utils = {

    //formatando as datas
    formatarDatas(date) {

        const separarData = date.split("-")

        return `${separarData[2]}/${separarData[1]}/${separarData[0]}`
    },

    //Verificando o status do lead e passando o statusCard
    statusCardCliente(status) {

        const statusDoLead = status

        if (statusDoLead === "Fechado") {
            return 'fechado'
        } else if (statusDoLead === "Negociação") {
            return 'negociacao'
        } else if (statusDoLead === "Follow") {
            return 'follow'
        } else if (statusDoLead === "Fechamento") {
            return 'fechamento'
        }
    },
}

const Cardkamban = {
    updateCardKamban(element) {
        const totalLeads = element;

        let totalFollow = [];
        let totalNegociacao = [];
        let totalFechamento = [];
        let totalFechado = [];

        for (i = 0; i < leads.length; i++) {
            const statusdoLead = leads[i].status;
            if (statusdoLead === "Follow") {
                totalFollow.push(statusdoLead);
            } else if (statusdoLead === "Negociação") {
                totalNegociacao.push(statusdoLead);
            } else if (statusdoLead === "Fechamento") {
                totalFechamento.push(statusdoLead);
            } else {
                totalFechado.push(statusdoLead);
            }
        }

        document.getElementById("totalLeads").innerHTML = totalLeads.length;
        document.getElementById("totalFollow").innerHTML = totalFollow.length;
        document.getElementById("totalNegociacao").innerHTML =
            totalNegociacao.length;
        document.getElementById("totalFechamento").innerHTML =
            totalFechamento.length;
        document.getElementById("totalFechado").innerHTML =
            totalFechado.length;
    },
};

const Cards = {
    all: leads,

    //adiciona um elemento em "leads" e atualiza a pagina
    addLead(novoLead) {
        Cards.all.push(novoLead);

        App.reload();
    },

    removeLead(index) {

        // o index está sendo usado para passar a posição do lead no array e o segundo parametro serve para saber quantos elementos quer deletar
        Cards.all.splice(index, 1);

        App.reload();
    },
};

const Form = {

    // pegando dados do formulário do botão "adicionar novo lead"
    name: document.querySelector("input#nameClient"),
    tipoDeEvento: document.querySelector("input#typeEvent"),
    numeroConvidados: document.querySelector("input#numberGuests"),
    dataDoEvento: document.querySelector("input#dateEvent"),
    telefone: document.querySelector("input#phoneClient"),
    localDoEvento: document.querySelector("input#eventLocation"),
    email: document.querySelector("input#emailClient"),
    dataPrimeiroContato: document.querySelector("input#dateFirstContact"),
    dataultimoContato: document.querySelector("input#dateLastContact"),
    enviadoPor: document.querySelector("input#sendBy"),
    canalQueVeio: document.querySelector("input#channelThatCame"),
    comoNosConheceu: document.querySelector("input#comoNosConheceu"),
    status: document.querySelector("input#status"),
    observacao: document.querySelector("textarea#observacao"),

    getValues() {
        //pegando os valores de cada campo
        return {
            name: Form.name.value,
            tipoDeEvento: Form.tipoDeEvento.value,
            numeroConvidados: Form.numeroConvidados.value,
            dataDoEvento: Form.dataDoEvento.value,
            telefone: Form.telefone.value,
            localDoEvento: Form.localDoEvento.value,
            email: Form.email.value,
            dataPrimeiroContato: Form.dataPrimeiroContato.value,
            dataultimoContato: Form.dataultimoContato.value,
            enviadoPor: Form.enviadoPor.value,
            canalQueVeio: Form.canalQueVeio.value,
            comoNosConheceu: Form.comoNosConheceu.value,
            status: Form.status.value,
            observacao: Form.observacao.value,
        }
    },

    validarCampos() {
        //Vendo se os campos estão vazios
        const {
            name,
            tipoDeEvento,
            numeroConvidados,
            dataDoEvento,
            telefone,
            localDoEvento,
            email,
            dataPrimeiroContato,
            dataultimoContato,
            enviadoPor,
            canalQueVeio,
            comoNosConheceu,
            status,
            observacao
        } = Form.getValues()

        //trim() = serve para fazer uma limpeza de espaço vazio
        if (name.trim() === "" ||
            tipoDeEvento.trim() === "" ||
            numeroConvidados.trim() === "" ||
            dataDoEvento.trim() === "" ||
            telefone.trim() === "" ||
            localDoEvento.trim() === "" ||
            email.trim() === "" ||
            dataPrimeiroContato.trim() === "" ||
            dataultimoContato.trim() === "" ||
            enviadoPor.trim() === "" ||
            canalQueVeio.trim() === "" ||
            comoNosConheceu.trim() === "" ||
            status.trim() === "") {
            throw new Error("Por favor, preencha todos os campos")
        }

    },

    formatarValores() {
        let {
            name,
            tipoDeEvento,
            numeroConvidados,
            dataDoEvento,
            telefone,
            localDoEvento,
            email,
            dataPrimeiroContato,
            dataultimoContato,
            enviadoPor,
            canalQueVeio,
            comoNosConheceu,
            status,
            statusCard,
            observacao
        } = Form.getValues()

        dataDoEvento = Utils.formatarDatas(dataDoEvento)

        dataPrimeiroContato = Utils.formatarDatas(dataPrimeiroContato)

        dataultimoContato = Utils.formatarDatas(dataultimoContato)

        statusCard = Utils.statusCardCliente(status)
        console.log(statusCard)

        return {
            name,
            tipoDeEvento,
            numeroConvidados,
            dataDoEvento,
            telefone,
            localDoEvento,
            email,
            dataPrimeiroContato,
            dataultimoContato,
            enviadoPor,
            canalQueVeio,
            comoNosConheceu,
            status,
            statusCard,
            observacao

        }
        console.log(status)

    },

    salvarDadosNovoLead(dadosFormatados) {
        Cards.addLead(dadosFormatados)
    },

    clearDadosModal() {
        Form.name.value = ""
        Form.tipoDeEvento.value = ""
        Form.numeroConvidados.value = ""
        Form.dataDoEvento.value = ""
        Form.telefone.value = ""
        Form.localDoEvento.value = ""
        Form.email.value = ""
        Form.dataPrimeiroContato.value = ""
        Form.dataultimoContato.value = ""
        Form.enviadoPor.value = ""
        Form.canalQueVeio.value = ""
        Form.comoNosConheceu.value = ""
        Form.status.value = ""
        Form.observacao.value = ""
    },

    submit(event) {
        event.preventDefault();

        try {
            // Validar campos
            // Form.validarCampos();
            //formatar os dados para salvar
            const dadosFormatados = Form.formatarValores()

            //salvar 
            Form.salvarDadosNovoLead(dadosFormatados)

            //apagar os dados do formulario
            Form.clearDadosModal()

            //modal feche
            ModalAddLead.close()


        } catch (error) {
            alert(error.message)
        }

    },
};

const App = {
    //inicia a aplicação
    init() {
        Cardkamban.updateCardKamban(leads);

        //adiona um card para cada lead
        // o index está sendo usado para passar a posição do lead no array
        Cards.all.forEach((novoLead, index) => {
            DOM.criarNovoCard(novoLead, index);
        });
    },
    reload() {
        //limpa a pagina e inicia
        DOM.clearCards();
        App.init();
    },
};

App.init();