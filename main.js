const notas = document.querySelectorAll('#opcao')
const botaoAvaliar = document.querySelector('#botao-avaliar')
const cartaoAvaliacao = document.querySelector('#cartao-avaliar')
const cartaoAgradecimento = document.querySelector('#cartao-agradecimento')

let nota = ""

function avaliar (nota) {
    let notaDada = `You selected out ${nota} of 5`

    const tagAvaliacaoFeita = document.querySelector('#avaliacao-feita')
    tagAvaliacaoFeita.textContent = notaDada
}

notas.forEach ( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        
        nota = evento.target.textContent

        avaliar(nota)
        
    })
})

function enviar () {

    if(nota === "") {
        alert('Escolha uma nota!')
        return
    }

    cartaoAvaliacao.style.display = "none"
    cartaoAgradecimento.style.display = "flex"
    cartaoAgradecimento.style.flexDirection = "column"
    cartaoAgradecimento.style.justifyContent = "center"
    cartaoAgradecimento.style.alignItems = "center"
}

botaoAvaliar.addEventListener('click' , () => {
    enviar()
})