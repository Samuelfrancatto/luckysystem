let premio

const btnAdd = document.querySelector('#add')

const inputPremio = document.querySelector('#premio')





var nomes = []

btnAdd.addEventListener('click', () => {

    

    premio = inputPremio.value

    console.log(premio)

    const inputNome = document.querySelector('#nome')

    nome = inputNome.value 

    if(premio == "" && nome == ""){
        alert('Por favor, insira as informações')
    } else if(premio != "" && nome == ""){
        alert('Por favor, adicione um nome')
    } else if (premio == "" && nome != ""){
        alert('Por favor, adicione um prêmio')
    }
    else{

        if(!nomes.includes(nome)){
        nomes.push(nome)
        inputNome.value = ""
        inputPremio.disabled = true
    } else{
        alert(`O nome "${nome}" já foi adicionado`)
    }

    tabela.innerHTML = ""

    nomes.map((el) => {
        const tabela = document.querySelector('#tabela')
        const tr = document.createElement('tr')

        tabela.appendChild(tr)

        const td = document.createElement('td')

        td.innerHTML = el

        tr.appendChild(td)

        td.addEventListener('click', () => {
            if(td.classList.contains('selecionado')){
                td.classList.remove('selecionado')
            } else{
                tirarSelecao()
            td.classList.add('selecionado')
            }
            
        })

        })
    
   
    }

    console.log(nomes)

    localStorage.setItem('nomes', JSON.stringify(nomes))

    localStorage.setItem('premio', JSON.stringify(premio))
})

const tirarSelecao = () => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((el) => {
        el.classList.remove('selecionado')
    })
}

/* Remove o nome selecionado na tabela */

const remove = document.querySelector('#remove')

remove.addEventListener('click', () => {
    const nomesSelecionados = document.querySelectorAll('.selecionado')

    if(nomesSelecionados.length > 0){
       nomesSelecionados.forEach((td) => {
        const tr = td.parentElement
        tr.remove()

        const nomeRemover = td.textContent
        const index = nomes.indexOf(nomeRemover)
        if(index !== -1){
            nomes.splice(index, 1)
       }
    })

    localStorage.setItem('nomes', JSON.stringify(nomes))
   }
})

const sortear = document.querySelector('#sortear')

sortear.addEventListener('click', () => {
    if (premio === "" || nomes.length < 2){
        alert('Por favor, adicione um prêmio e pelo menos dois nomes antes de sortear.')
    } else{
        window.location.href = 'sorteio/sorteio.html'
    }
})






    



