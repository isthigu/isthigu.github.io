const btns = [...document.querySelectorAll('button')]
const visor = [...document.querySelectorAll('.visor div')]

let visorAtual = visor[2].innerHTML;
let visorOperador = visor[1].innerHTML;;
let visorUltimo = visor[0].innerHTML;;

function limpar(){
    visor.forEach((el)=>{
        el.innerHTML = '';
    })
}

const apg = function apagar(){
    visor[2].innerHTML = visor[2].innerHTML.slice(0,-1);
}

function atualToUltimo(){
    // visorUltimo.innerHTML = visorAtual.innerHTML;
    visor[0].innerHTML = visor[2].innerHTML
    ;
}

btns.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        switch(el.dataset.value){
            case '+':
                visor[1].innerHTML = '+';
                break;
            case '-':
                visor[1].innerHTML = '-';
                break;
             case '*':
                visor[1].innerHTML = '*';
                break;
             case '/':
                visor[1].innerHTML = '/';
                break;
            case '=':
                operador = visor[1].innerHTML;
                switch (operador) {
                    case '+':
                        res = Number(visor[0].innerHTML) + Number(visor[2].innerHTML);
                        visor[2].innerHTML = res;
                        console.log(res);
                        break;
                    case '-':
                        console.log('-');
                        break;
                    case '*':
                        console.log('*');
                        break;
                    case '/':
                        console.log('/');
                        break;
                    case '%':
                        console.log('%');
                        break;
                    case 'b':
                        atualToUltimo();
                        console.log('asdw')
                        break;
                    default:
                        alert('operador invalido' + operador);
                        break;
                }
            case 'apg':
                // apagar();
                apg();
                break;
            case NaN:
                alert('NaN');
            default:
                visor[2].innerHTML = visor[2].innerHTML += el.dataset.value;
        }
        switch(el.dataset.func){
            case 'c':
                limpar();
                break;
        }
        // console.log(el.dataset.value)
    })
})



// console.log(visor)

// 
// console.log(a)

//forEach percorrer


