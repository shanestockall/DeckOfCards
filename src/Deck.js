var Card = require('./Card.js');

class Deck {

	static get SUITS() {
		return ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
	}

	static get VALUES() {
		return ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
	}

	/**
	* Constructs a generic 52-card deck object
	* Initializes deck in random order 
	* @constructor
	*/
	constructor() {
		this.cards = [];
		this.initializeDeck(Deck.SUITS, Deck.VALUES);
	}

	/**
	* Helper method to initialize a randomized deck with specified suits and values
	* Building it this way means that our system is extensible to other deck types (ex: Euchre)
	* @param {array} suits
	* @param {array} values
	*/
	initializeDeck(suits, values) {
		for (let suit in suits) {
			for (let value in values) {
				this.cards.push(new Card(suits[suit], values[value])); 
			}
		}
		this.shuffle();
	}

	/**
	* Shuffles current array this.deck using the Fisher-Yates method at O(n) complexity described here:
	* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method
	*/
	shuffle() {
		for (let i = this.cards.length - 1; i > 0; i --) {
			let j = Math.floor(Math.random() * (i + 1));
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
		}
	}

	/**
	* Function returns the top card in the deck array
	* @return {Card}
	*/
	deal() {
		return this.cards.shift(); 
	}

	// Optional improvement to deal any N cards
	// function signature would be @return {array of Card} 
	// deal(int n) {
	// 	if (n < deck.length) {
	// 		deck = deck.slice(n-1, deck.length-1); 
	// 		return deck.slice(0, n-1); 
	// 	}
	// }
}

module.exports = Deck;