

let randomNumber = parseInt(Math.random() * 100+ 1)


// select the element

 const userInput = document.querySelector('#guessField');
 const submit = document.querySelector('#submt');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('lowOrHi');
 const startOver = document.querySelector('.resultParas')

 const p = document.createElement('p')

 //submit the input value it show the previous guess and show no of gauess

 let prevGuess = []
 let numGuess = 1
 
 // conditon for the User is able to play game
 
 let playGame = true;

 if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault(); 
       const  guess = parseInt(userInput.value);
       console.log(guess);
       validateGuess(guess);

    });
 }  

 //  functions of the game
 
 // This method is validate the input for the game

function validateGuess (guess){
    if(isNaN(guess)){
        alert('please Enter a valid number')
    } else if (guess < 0 ) {
        alert('please enter a Number more than 1')
        
    } else if (guess > 100){
        alert('please enter Number less than 100')
    }else {
        prevGuess.push(guess);
        if(guess === numGuess){

            displayGuess(guess);
            displayMessage(`Gave Over : Random nUmber was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
    
}
 // Method check the user input right , low or high


function checkGuess (guess){
    if (guess === randomNumber){
        displayMessage(`You are Right : the Number is ${randomNumber}`)
    }else if (guess > randomNumber){
        displayMessage(`Your Number is too high`)
    }else if (guess < randomNumber){
        displayMessage(`Your Number is too Low`)
    }
}

// Method is display the guess,remaining guess

function displayGuess (guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame (){
    userInput.value = '';
    userInput.setAttribute('disiabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game </h2>'
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame (){
     document.querySelector('#newgame').addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)

        playGame = true;
     })
}