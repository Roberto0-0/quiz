const perguntas = []
perguntas['50'] = '7+7÷7+7x7-7'
perguntas['16'] = '7+3÷6+7x5-7'
perguntas['3'] = '1+7÷7+7x8-7'
perguntas['6'] = '4+7÷2+7x6-7'

const telaPerguntas = document.getElementById('perguntas')
const data1 = document.getElementById('data-1')
const data2 = document.getElementById('data-2')
const data3 = document.getElementById('data-3')
const data4 = document.getElementById('data-4')


telaPerguntas.innerHTML = perguntas[50]
data1.innerHTML = '8'
data2.innerHTML = '56'
data3.innerHTML = '50'
data4.innerHTML = '45'

const resuData1 = perguntas[data1.textContent]
const resuData2 = perguntas[data2.textContent]
const resuData3 = perguntas[data3.textContent]
const resuData4 = perguntas[data4.textContent]

console.log(perguntas[data1.textContent])
console.log(perguntas[50])

function clicarData1() {
    if(resuData1 === perguntas[50]){
        document.getElementById('data-1').style.boxShadow = "0px 0px 10px 5px green"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Acertou!"
        const audioAcerto = new Audio('./audio/audioAcerto.mp3')
        audioAcerto.play()
    }else{
        document.getElementById('data-1').style.boxShadow = "0px 0px 10px 5px red"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Errou!"
        const audioAcerto = new Audio('./audio/audioErro.mp3')
        audioAcerto.play()
    }
}
function clicarData2() {
    if(resuData2 === perguntas[50]){
        document.getElementById('data-2').style.boxShadow = "0px 0px 10px 5px green"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Acertou!"
        const audioAcerto = new Audio('./audio/audioAcerto.mp3')
        audioAcerto.play()
    }else{
        document.getElementById('data-2').style.boxShadow = "0px 0px 10px 5px red"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Errou!"
        const audioAcerto = new Audio('./audio/audioErro.mp3')
        audioAcerto.play()
    }
}
function clicarData3() {
    if(resuData3 === perguntas[50]){
        document.getElementById('data-3').style.boxShadow = "0px 0px 10px 5px green"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Acertou!"
        const audioAcerto = new Audio('./audio/audioAcerto.mp3')
        audioAcerto.play()
    }else{
        document.getElementById('data-3').style.boxShadow = "0px 0px 10px 5px red"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Errou!"
        const audioAcerto = new Audio('./audio/audioErro.mp3')
        audioAcerto.play()
    }
}
function clicarData4() {
    if(resuData4 === perguntas[50]){
        document.getElementById('data-4').style.boxShadow = "0px 0px 10px 5px green"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Acertou!"
        const audioAcerto = new Audio('./audio/audioAcerto.mp3')
        audioAcerto.play()
    }else{
        document.getElementById('data-4').style.boxShadow = "0px 0px 10px 5px red"
        const aviso = document.getElementById('aviso')
        aviso.innerHTML = "Errou!"
        const audioAcerto = new Audio('./audio/audioErro.mp3')
        audioAcerto.play()
    }
}