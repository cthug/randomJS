
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['clubs', 'diamonds', 'spades', 'hearts'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        intitilizeDeck() {
            const {
                suits,
                values,
                deck
            } = this;
            for (let val of values.split(',')) {
                for (let suit of suits) {
                    deck.push({
                        val,
                        suit
                    })
                }
            }
            //return deck;
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = []
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], [deck[i]]];
            }
        }
    }
    function drawCard(deck) {
        return deck.pop()
    }
}
    const myDeck = makeDeck();
    myDeck.intitilizeDeck();
    myDeck.shuffle();
    const h1 = myDeck.drawMultiple(2);
    const h2 = myDeck.drawMultiple(2);
    const h3 = myDeck.drawMultiple(2);

