var pontosAzul = 1;
const BTN_SELETOR_AZUL = document.querySelectorAll('.btnSeletorAzul');
const PONTOS_AZUL = document.querySelector('.pontos-azul')
BTN_SELETOR_AZUL.forEach((e)=>{
    e.addEventListener('click', ()=>{
        removerSelecionadoAzul()
        e.classList.add('selecionado')
    })
})

function removerSelecionadoAzul(){
    BTN_SELETOR_AZUL.forEach((e)=>{
        e.classList.remove('selecionado')
    })
}

function seletorAzul(valor){
        pontosAzul = valor;
}

function marcarAzul(){
       let pts = Number(PONTOS_AZUL.innerHTML);
       PONTOS_AZUL.innerHTML = pts + pontosAzul;
       checaPonto(pts, PONTOS_AZUL)

       falarPontos(pontosAzul,"azul","mais");



}
function removerAzul(){
    let pts = Number(PONTOS_AZUL.innerHTML);
    PONTOS_AZUL.innerHTML = pts - 1; 
    falarPontos(pontosAzul,"azul","menos");
}

/**/

function checaPonto(pontos,htmlPontos){
    if (pontos < 0 || pontos > 11 ){
        htmlPontos.innerHTML = 0;
    }
}

function falarPontos(pontos,time,tipo){
    var msg = new SpeechSynthesisUtterance();
    msg.text = tipo + pontos + time;
    msg.rate = 2;
    window.speechSynthesis.speak(msg);
}

/**/

var pontosAmarelo = 1;
const BTN_SELETOR_AMARELO = document.querySelectorAll('.btnSeletorAmarelo');
const PONTOS_AMARELO = document.querySelector('.pontos-amarelo')
BTN_SELETOR_AMARELO.forEach((e)=>{
    e.addEventListener('click', ()=>{
        removerSelecionadoAmarelo()
        e.classList.add('selecionado')
    })
})

function removerSelecionadoAmarelo(){
    BTN_SELETOR_AMARELO.forEach((e)=>{
        e.classList.remove('selecionado')
    })
}

function seletorAmarelo(valor){
        pontosAmarelo = valor;
}

function marcarAmarelo(){
       let pts = Number(PONTOS_AMARELO.innerHTML);
       PONTOS_AMARELO.innerHTML = pts + pontosAmarelo;
       checaPonto(pts, PONTOS_AMARELO)
       falarPontos(pontosAmarelo,"amarelo","mais");
}
function removerAmarelo(){
    let pts = Number(PONTOS_AMARELO.innerHTML);
    PONTOS_AMARELO.innerHTML = pts - 1; 
    falarPontos(pontosAmarelo,"amarelo","menos");
}
