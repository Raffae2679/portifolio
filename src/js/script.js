function contato() {
    window.location = "#contato"
}

function projetos() {
    window.location = "#projetos"
}

function filtro(stack) {

    var cards = document.getElementsByClassName("card")
    let lista
    

    for (let i = 0; i < cards.length; i++) {
        lista = Array.from(cards[i].classList)

        if(stack=="todos"){
            cards[i].classList.remove("desativado")
            cards[i].classList.add("ativo")
        }

        else if (!lista.includes(stack)) {
            cards[i].classList.remove("ativo")
            cards[i].classList.add("desativado")
        }

        else{
            cards[i].classList.add("ativo")
        }
    }
}