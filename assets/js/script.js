document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;

    for(var i = 0; i < squares.length; i++);

    (function(index) {
        squares[i].onclick = function() {
            // if the square below your current swuare is taken, you can go ontop of it
            if(squares[index + 7].classList.contains('taken')) {
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-one')
                    // change the player
                    currentPlayer = 2;
                    displayCurrentPlayer.innerHTML = currentPlayer;
                } else if (currentPlayer === 2) {
                    squares[index].classList.add('taken');
                    squares[index].classList.add('player-two')
                    //change the player 
                }
            }
        }
    })

})