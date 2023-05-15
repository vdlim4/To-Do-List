function adicionar() {
    let trf = document.querySelector('input.txttit')
    let desc = document.querySelector('input.txtdesc')
    let data =  new Date(document.querySelector('input.txtdata'))
    let valData = new Date()
    let imp = document.getElementsByName('radio')

    if (trf.value == 0) {
        alert('Favor inserir o nome da tarefa!')
    } else {
        let divNova = document.createElement('div')
        divNova.className = "cont-tarefa"
        let titDiv = document.createElement('p')
        let titText = document.createTextNode(`${trf.value}`)
        titDiv.appendChild(titText)
        titDiv.className = 'tarefa-tit'
        let descDiv = document.createElement('p')
        let descText = document.createTextNode(`${desc.value}`)
        descDiv.appendChild(descText)
        descDiv.className = 'tarefa-desc'

        divNova.appendChild(titDiv)
        divNova.appendChild(descDiv)

        if (data.value != 0){
            let diferença = data.getTime() - valData.getTime()
            let diasF = Math.ceil(diferença / (1000 * 60 * 60 * 24))
            
            let dataDiv = document.createElement('p')
            let dataText = document.createTextNode(`${diasF}`)
            dataDiv.appendChild(dataText)

            divNova.appendChild(dataDiv)
        }

        if (imp[0].checked) {
            let urgente = document.querySelector('div.cont-urgente')
            urgente.appendChild(divNova)
        } else {
            let comum = document.querySelector('div.cont-comum')
            comum.appendChild(divNova)
        }
    }
    trf.value = ''
    desc.value = ''
    data.value = ''
}