// JavaScript source code
function playGame (){
 clearMessages
 
 let playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');

 let randomNumber = Math.floor(Math.random() * 3 + 1);

 console.log('Wylosowana liczba to: ' + randomNumber);
 let playerMove = getMoveName(randomNumber);

 let computerMove = getMoveName(randomNumber);
 /*
 if (randomNumber == 1) {
    playerMove = 'kamieñ';
 }

 printMessage('Mój ruch to: ' + computerMove);
 if (randomNumber == 2) {
    playerMove = 'papier';
 }
 printMessage('Mój ruch to: ' + computerMove);
 if (randomNumber == 3) {
    playerMove = 'no¿yce';
 }
 printMessage('Mój ruch to: ' + computerMove);
 */

 console.log('Gracz wpisa³: ' + playerInput);

 /*
 if (playerInput == '1') {
    playerMove = 'kamieñ';
 }

 printMessage('Twój ruch to: ' + playerMove);
 if (playerInput == '2') {
    playerMove = 'papier';
 }

 printMessage('Twój ruch to: ' + playerMove);
 if (playerInput == '3') {
    playerMove = 'no¿yce';
 }

 printMessage('Twój ruch to: ' + playerMove);
 */
 /*
 if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
 }
    if else (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
    }
    if else (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
    }
    if else (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
    }
    if else (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!');
    }
    if else (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
    }
    if else (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
    }
    else
    printMessage('Ty przegrywasz')
  */
}

 let playRock = document.getElementById('kamień');

 testButton.addEventListener('click', buttonClicked);
 
 let playPaper = document.getElementById('papier');

 testButton.addEventListener('click', buttonClicked);
 
 let playScissors = document.getElementById('nożyce');

 testButton.addEventListener('click', buttonClicked);







