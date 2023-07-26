const cardsData = [
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'A' },
    { id: 6, value: 'B' },
    { id: 7, value: 'C' },
    { id: 8, value: 'D' },
  ];
  
  const memoryBoard = document.getElementById('memoryBoard');
  let flippedCards = [];
  let matchedCards = [];
  
  function createCard(id, value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.id = id;
    card.dataset.value = value;
    card.innerHTML = `<span>${value}</span>`;
    card.addEventListener('click', flipCard);
    return card;
  }
  
  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && !matchedCards.includes(this)) {
      this.classList.add('flipped');
      flippedCards.push(this);
  
      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }
  }
  
  function checkForMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
  
    if (card1.dataset.value === card2.dataset.value) {
      matchedCards.push(card1, card2);
      flippedCards = [];
  
      card1.classList.add('flipped');
      card2.classList.add('flipped');
  
      setTimeout(() => {
        card1.classList.add('hidden');
        card2.classList.add('hidden');
  
        if (matchedCards.length === cardsData.length) {
          setTimeout(showVictoryMessage, 500);
        }
      }, 300); // Délai de 300 ms pour laisser le temps de l'animation de retournement
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }
  }
  
  function showVictoryMessage() {
    alert('Félicitations ! Vous avez gagné !');
    resetGame();
  }
  
  function resetGame() {
    memoryBoard.innerHTML = '';
    matchedCards = [];
    flippedCards = [];
    createMemoryBoard();
  }
  
  function createMemoryBoard() {
    const shuffledCards = shuffle(cardsData);
    shuffledCards.forEach((cardData) => {
      const card = createCard(cardData.id, cardData.value);
      memoryBoard.appendChild(card);
    });
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  createMemoryBoard();
  