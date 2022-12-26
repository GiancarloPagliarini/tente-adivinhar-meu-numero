let btn = document.querySelector('.btn-primary')
let result = document.querySelector('.res')
let textDefault = document.querySelector('.text-default')
let congratilations = document.querySelector('.congratilations')

let randomNumber = 0
let numberChosen = 0

function randomicNumber() {
    randomNumber = Math.floor(Math.random() * 100)
    console.log(randomNumber);
}

btn.addEventListener('click', () => {
    numberChosen = Number(prompt('Qual seu palpite?'))
    
    if (numberChosen < randomNumber) {
        result.innerHTML += `<p>Você falou ${numberChosen}. Meu número é <strong>MAIOR</strong></p>`
    } else if (numberChosen > randomNumber) {
        result.innerHTML += `<p>Você falou ${numberChosen}. Meu número é <strong>MENOR</strong></p>`
    } else if (numberChosen === randomNumber) {
        result.innerHTML += `<hr><p><strong>🎉 PARABÉNS! 🎉</strong> Você acertou! Eu tinha sorteado o valor <strong>${randomNumber}</strong></p>`
        btn.style.display = 'none'
        result.innerHTML += `<p>Para jogar mais, recarregue a página 😀</p>`

        congratilations.style.display = 'block'
        textDefault.innerHTML = ''
    }
})