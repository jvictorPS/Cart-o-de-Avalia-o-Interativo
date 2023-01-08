const notas = document.querySelectorAll('.opcao')
let notaDada = "teste"

notas.forEach ( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        avalia(evento.target.textContent)
    })
})

export function avalia (nota) {
    notaDada = `You selected out ${nota} of 5`

}

console.log(notaDada)
