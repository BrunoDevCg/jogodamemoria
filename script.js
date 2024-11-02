document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: '1', img: '1' },
        { name: '2', img: '2' },
        { name: '3', img: '3' },
        { name: '4', img: '4' },
        { name: '5', img: '5' },
        { name: '6', img: '6' },
        { name: '1', img: '1' },
        { name: '2', img: '2' },
        { name: '3', img: '3' },
        { name: '4', img: '4' },
        { name: '5', img: '5' },
        { name: '6', img: '6' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game-board');
    const moveCounter = document.getElementById('move-counter');
    const timerDisplay = document.getElementById('timer');
    const rankingList = document.getElementById('ranking-list');
    const resetRankingButton = document.getElementById('reset-ranking');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let moves = 0;
    let timer = 0;
    let timerInterval;
    let lockBoard = false; // Impedir cliques enquanto o par de cartas está sendo verificado

    function createBoard() {
        gameBoard.innerHTML = ''; // Limpar o tabuleiro antes de reiniciar
        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('class', 'card hidden');
            cardElement.setAttribute('data-id', index);
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
        resetGame();
        startTimer();
    }

    function flipCard() {
        if (lockBoard) return; // Bloquear cliques enquanto o par de cartas está sendo comparado

        const cardId = this.getAttribute('data-id');
        if (cardsChosenId.includes(cardId) || cardsWon.some(card => card[0] === cardArray[cardId].name)) return; // Evitar clicar na mesma carta duas vezes ou em cartas já combinadas

        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.innerText = cardArray[cardId].img;
        this.classList.remove('hidden');
        this.classList.add('flipped');

        if (cardsChosen.length === 2) {
            lockBoard = true; // Bloquear cliques até que a comparação termine
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [optionOneId, optionTwoId] = cardsChosenId;
        moves++;
        moveCounter.innerText = moves;

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].innerText = '';
            cards[optionTwoId].innerText = '';
            cards[optionOneId].classList.add('hidden');
            cards[optionTwoId].classList.add('hidden');
        }

        cardsChosen = [];
        cardsChosenId = [];
        lockBoard = false; // Liberar cliques após a comparação

        if (cardsWon.length === cardArray.length / 2) {
            clearInterval(timerInterval);
            const playerName = prompt('Parabéns! Você encontrou todos os pares! Insira seu nome:');
            if (playerName) {
                saveScore(playerName, moves, timer);
                displayRanking();
            }
        }
    }

    function startTimer() {
        timer = 0;
        clearInterval(timerInterval); // Garantir que o timer seja reiniciado
        timerInterval = setInterval(() => {
            timer++;
            timerDisplay.innerText = timer;
        }, 1000);
    }

    function saveScore(name, moves, time) {
        const newScore = { name, moves, time };
        let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        ranking.push(newScore);
        ranking.sort((a, b) => a.moves - b.moves || a.time - b.time); // Ordenar por jogadas e tempo
        ranking = ranking.slice(0, 10); // Manter apenas os 10 melhores
        localStorage.setItem('ranking', JSON.stringify(ranking));
    }

    function displayRanking() {
        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
        rankingList.innerHTML = ranking.map(score => 
            `<li>${score.name} - ${score.moves} jogadas, ${score.time} segundos</li>`
        ).join('');
    }

    function resetRanking() {
        localStorage.removeItem('ranking');
        displayRanking();
    }

    function resetGame() {
        cardsChosen = [];
        cardsChosenId = [];
        cardsWon = [];
        moves = 0;
        moveCounter.innerText = moves;
        timerDisplay.innerText = 0;
    }

    resetRankingButton.addEventListener('click', resetRanking);

    createBoard();
    displayRanking();
});
