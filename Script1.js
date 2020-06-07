// JavaScript source code
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let computerMove = `kamień`;
let playerMove = 'papier';

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamieñ';
}

printMessage('Mój ruch to: ' + computerMove);
if (randomNumber == 2) {
    computerMove = 'papier';
}
printMessage('Mój ruch to: ' + computerMove);
if (randomNumber == 3) {
    computerMove = 'no¿yce';
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');

console.log('Gracz wpisa³: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamieñ';
}

printMessage('Twój ruch to: ' + playerMove);
if (playerInput == '2') {
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);
if (playerInput == '3') {
    playerrMove = 'no¿yce';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamieñ' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
    if (computerMove == 'papier' && playerMove == 'kamieñ') {
        printMessage('Ty przegrywasz!');
        if (computerMove == 'no¿yce' && playerMove == 'papier') {
            printMessage('Ty przegrywasz!');
            if (computerMove == 'kamieñ' && playerMove == 'kamieñ') {
                printMessage('REMIS!');
                if (computerMove == 'no¿yce' && playerMove == 'no¿yce') {
                    printMessage('REMIS!');
                    if (computerMove == 'papier' && playerMove == 'papier') {
                        printMessage('REMIS!');
                        if (computerMove == 'kamieñ' && playerMove == 'no¿yce') {
                            printMessage('Ty przegrywasz!');
                            if (computerMove == 'papier' && playerMove == 'no¿yce') {
                                printMessage('Ty wygrywasz!');
                                if (computerMove == 'no¿yce' && playerMove == 'kamieñ') {
                                    printMessage('Ty wygrywasz!');
                                    if (playerMove == 'nieznany ruch') {
                                        printMessage('Nieznany ruch!');
