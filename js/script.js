const perguntas = []
perguntas['2'] = '1+1'
perguntas['5'] = '3+2'
perguntas['6'] = '3+3'
perguntas['1'] = '1+0'

const telaPerguntas = document.getElementById('perguntas')
const data1 = document.getElementById('data-1')
const data2 = document.getElementById('data-2')
const data3 = document.getElementById('data-3')
const data4 = document.getElementById('data-4')


telaPerguntas.innerHTML = perguntas[2]
data1.innerHTML = '2'
data2.innerHTML = '6'
data3.innerHTML = '1'
data4.innerHTML = '18'

const resuData1 = perguntas[data1.textContent]
const resuData2 = perguntas[data2.textContent]
const resuData3 = perguntas[data3.textContent]
const resuData4 = perguntas[data4.textContent]

console.log(perguntas[data1.textContent])
console.log(perguntas[2])

function clicarData1() {
    if(resuData1 === perguntas[2]){
        document.getElementById('data-1').style.boxShadow = "0px 0px 10px 5px green"
    }else{
        document.getElementById('data-1').style.boxShadow = "0px 0px 10px 5px red"
    }
}
function clicarData2() {
    if(resuData2 === perguntas[2]){
        document.getElementById('data-2').style.boxShadow = "0px 0px 10px 5px green"
    }else{
        document.getElementById('data-2').style.boxShadow = "0px 0px 10px 5px red"
    }
}
function clicarData3() {
    if(resuData3 === perguntas[2]){
        document.getElementById('data-3').style.boxShadow = "0px 0px 10px 5px green"
    }else{
        document.getElementById('data-3').style.boxShadow = "0px 0px 10px 5px red"
    }
}
function clicarData4() {
    if(resuData4 === perguntas[2]){
        document.getElementById('data-4').style.boxShadow = "0px 0px 10px 5px green"
    }else{
        document.getElementById('data-4').style.boxShadow = "0px 0px 10px 5px red"
    }
}