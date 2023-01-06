const notas = document.querySelectorAll('.opcao')
const classificacao = document.querySelector('.avaliacao')


console.log(notas)
console.log(classificacao.textContent)

notas.forEach ( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        const nota = evento.target.textContent

        console.log(`Sua nota foi ${nota}`)
    })
})