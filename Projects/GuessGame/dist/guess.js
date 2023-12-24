let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const starOver=document.querySelector('.resultParas')


const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess= parseInt(userInput.value)
        console.log(guess);
        valdiateGuess(guess)
    })
}

function valdiateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`)
    }
    else if (guess<1) {
        alert(`please enter a number more than 1`)
    }
     else if (guess>100) {
        alert(`please enter a number less than 100`)
    }
    else{
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
            
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessage(`Excellent Answer 100% Right`)
        endGame()
    }
    else if (guess>randomNumber) {
        displayMessage(`You guess is Tooo greater`)
        
    }
    else if (guess < randomNumber) {
        displayMessage(`You guess is Too lesser`)
        
    }
}

function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    remaining.innerHTML= `${11-numGuess}`
}


function displayMessage(msg) {
    lowOrHi.innerHTML=`<h2>${msg}</h2>`
}



function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<button id="newGame">Start a new Game</button>`
    starOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame() {
    const newGameButn= document.querySelector('#newGame')
    newGameButn.addEventListener('click',function (e) {
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    starOver.removeChild(p)

    playGame=true

    })
}
