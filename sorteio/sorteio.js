let nomes = JSON.parse(localStorage.getItem('nomes')) || []

let premio = JSON.parse(localStorage.getItem('premio')) || []

const textoGanhador = document.querySelector('#textoGanhador')

    var i = Math.floor(Math.random() * (nomes.length - 0))

    let sortudo = nomes[i]

    textoGanhador.innerHTML = `<strong>${sortudo}</strong> ganhou <strong>${premio}</strong>!!!`

