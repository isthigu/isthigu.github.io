
const a = [...document.querySelectorAll('button')]
const visor = [...document.querySelectorAll('.visor div')]

// 
a.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        console.log(el.dataset.value)
    })
})



console.log(visor[0])


// 
// console.log(a)

//forEach percorrer 