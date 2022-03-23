const expBox = document.querySelector('.exp')
const resultBox = document.querySelector('.results')
const allBtns = document.querySelectorAll('.num')

//app states
let equal = false

//manage App state
function manageOpt (val) {
    equal = false
    if ( 'x/-%+'.includes(val) || 'C←='.includes(val)){
        return

    }else{
        clearScreen()
    }
}

allBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        //check App state
        if (equal) {
            manageOpt(btn.textContent)
        }
        
        if (btn.textContent === "C" ){
            clearScreen()
        }else if (btn.textContent === 'x'){
            expBox.textContent += '*'
        }else if (btn.textContent === '+ / -'){
            expBox.textContent = `-${expBox.textContent}`
        }else if (btn.textContent === '='){
            resultBox.textContent = eval(expBox.textContent)
            equal = false

        } else if (btn.textContent === '←'){
            expBox.textContent = expBox.textContent.slice(0, -1)
        }else{
            expBox.textContent += btn.textContent
        }

    })

})

function clearScreen () {
    expBox.textContent = ''
    resultBox.innerHTML = ''
}

const button = document.querySelector('.mode')
const app = document.querySelector('#app')

button.addEventListener("click", () => {
    app.classList.toggle("dark");
})
   