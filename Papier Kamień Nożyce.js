!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Kamień, papier, nożyce</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <div id="buttons"></div>
        <div id="messages">
            printMessage('Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!');
            printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to papier, to wygrywasz!');
            printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
            printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
        </div>
    </div>
    <script src="js/functions.js"></script>
    <script src="js/script.js"></script>
</body>
</html>

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