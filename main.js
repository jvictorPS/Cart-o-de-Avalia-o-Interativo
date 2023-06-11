const notas = document.querySelectorAll('#opcao')
const botaoAvaliar = document.querySelector('#botao-avaliar')
const cartaoAvaliacao = document.querySelector('#cartao-avaliar')
const cartaoAgradecimento = document.querySelector('#cartao-agradecimento')

let nota = ""

notas.forEach ( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        
        avaliar(evento.target.textContent)
        
    })
})

botaoAvaliar.addEventListener('click' , () => {

    cartaoAvaliacao.style.display = "none"
    cartaoAgradecimento.style.display = "flex"
    cartaoAgradecimento.style.flexDirection = "column"
    cartaoAgradecimento.style.justifyContent = "center"
    cartaoAgradecimento.style.alignItems = "center"

})

function avaliar (nota) {
    let notaDada = `You selected out ${nota} of 5`

    const tagAvaliacaoFeita = document.querySelector('#avaliacao-feita')
    tagAvaliacaoFeita.textContent = notaDada
}
