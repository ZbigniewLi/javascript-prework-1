{
    const getMoveName = function (argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
    }
    if(argMoveId == 3) {
        return 'nożyce'
    } 
  }
  
  const displayResult = function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } 
    else if( computerMove == playerMove){printMessage('remis')} else {
        
      printMessage('Tym razem przegrywasz :(');
    }
  }
const playGame = function (argPlayerMove){
    clearMessages();
const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);



printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + argPlayerMove);
displayResult(argPlayerMove, computerMove)
}

document.querySelector('#play-rock').addEventListener('click',function(){playGame('kamień')});
document.querySelector('#play-paper').addEventListener('click',function(){playGame('papier')});
document.querySelector('#play-scissors').addEventListener('click',function(){playGame('nożyce')});
}