// JavaScript source code
function playGame (playerMove){
 clearMessages()
 
 let randomNumber = Math.floor(Math.random() * 3 + 1);

 console.log('Wylosowana liczba dla komputera to: ' + randomNumber);

 let computerMove = getMoveName(randomNumber);
 
 printMessage( 'Komputer wybral ' + computerMove+ ', a gracz wybrał ' + playerMove);
    if (computerMove == 'kamień' && playerMove == 'papier') {
	    printMessage('Ty wygrywasz!');
	   } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	    printMessage('Ty wygrywasz!');
	   } else if (computerMove == 'papier' && playerMove == 'nożyce') {
	    printMessage('Ty wygrywasz!');
	   } else if (computerMove ==  playerMove) {
	    printMessage('Remis!');
	   } else {
	    printMessage('Ty przegrywasz');
	   }
}

 console.log('Gracz wpisa³: ' + playerInput);

 

 let playRock = document.getElementById('play-rock');

 let playPaper = document.getElementById('play-paper');

 let playScissors = document.getElementById('play-scissors');

 playRock.addEventListener('click', buttonClicked);

 playPaper.addEventListener('click', buttonClicked);

 playScissors.addEventListener('click', buttonClicked);







