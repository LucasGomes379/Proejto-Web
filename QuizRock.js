let PG1 = document.getElementById('pergunta1')
let PG2 = document.getElementById('pergunta2')
let PG3 = document.getElementById('pergunta3')
let PG4 = document.getElementById('pergunta4')
let PG5 = document.getElementById('pergunta5')
let PG6 = document.getElementById('pergunta6')
let PG7 = document.getElementById('pergunta7')
let PG8 = document.getElementById('pergunta8')
let PG9 = document.getElementById('pergunta9')
let PG10 = document.getElementById('pergunta10')

function testar(){
    console.log("teste")
let Elvis=0;
let JimiHendrix=0;
let Ozzy=0;
let KurtCobain=0;

let radios = document.querySelectorAll('input[type="radio"]')
console.log(radios)


radios.forEach(e => {
if(e.checked){
    if(e.value == "Elvis"){
        Elvis++;
    }else if(e.value == "JimiHendrix"){
        JimiHendrix++;
    }else if(e.value == "Ozzy"){
        Ozzy++;
    }else if(e.value == "KurtCobain"){
        KurtCobain++;
    }
}
})

let resultado = `Elvis = ${Elvis}<br>
JimiHendrix = ${JimiHendrix}<br> Ozzy = ${Ozzy}<br>
KurtCobain = ${KurtCobain}`;

document.getElementById("resultado").innerHTML = resultado;

localStorage.setItem('Elvis', Elvis)
localStorage.setItem('JimiHendrix', JimiHendrix)
localStorage.setItem('Ozzy', Ozzy)
localStorage.setItem('KurtCobain', KurtCobain)

let maior = 0
let pagina
if(Elvis > maior){
pagina = 'Elvis'
}
if(JimiHendrix > maior){
pagina = 'JimiHendrix'
}
if(Ozzy > maior){
pagina = 'Ozzy'
}
if(KurtCobain > maior){
pagina = 'KurtCobain'
}


setTimeout(() => {
window.open(pagina+'Elvis.html')
}, 5000);

setTimeout(() => {
    window.open(pagina+'JH.html')
    }, 5000);

    setTimeout(() => {
        window.open(pagina+'ozzy.html')
        }, 5000);

        setTimeout(() => {
            window.open(pagina+'KC.html')
            }, 5000);
}