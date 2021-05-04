const Modal = {
    open(){

        document.querySelector('.modal-overlay').classList.toggle('active')

    },
    close(){
        document.querySelector('.modal-overlay').classList.toggle('active')
    }
}

const leads = [
    {
        id: 1,
        name: "Maise",
        numeroConvidados: 50,
        dataFesta: "09/12/2021",
        status: "Fechado",
        proximoContato: "10/05/21"
    },
    {
        id: 2,
        name: "Edson",
        numeroConvidados: 80,
        dataFesta: "25/07/2021",
        status: "Negociação",
        proximoContato: "01/06/21"
    },
    {
        id: 3,
        name: "Edna",
        numeroConvidados: 200,
        dataFesta: "26/10/2021",
        status: "Follow",
        proximoContato: "25/08/21"
    },
    {
        id: 4,
        name: "Fabio",
        numeroConvidados: 20,
        dataFesta: "19/05/2021",
        status: "Fechamento",
        proximoContato: "10/05/21"
    },
    
]

//Fazer um card com as informações do leads
//Enviar esse card para o html
//


const Cards = {
    adicionarCard(){
        leads.forEach(element => {
            console.log(element)
        });
    },
    editarCard(){
        //Editar o card

        alert('Editar Card')
    },
    excluirCard(){
        //Excluir o card
        alert('Excluir Card')
    },



}


Cards.adicionarCard()

