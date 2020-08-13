const Deck = require('../src/Deck.js');
const assert = require('assert'); 
const mockDeck = new Deck();

it('Instance of Deck can be created', () => {
	assert(mockDeck);
});

it('Instance of Deck has deck array, which is not null', () => {
	assert(mockDeck.cards !== 'undefined' && mockDeck.cards !== null);
});

it('Instance of Deck has 52 cards', () => {
	assert(mockDeck.cards.length === 52);
});

it('Instance of Deck has expected number of card suits', () => {
	const spades = mockDeck.cards.filter(card => card.suit === 'Spades');
	const clubs = mockDeck.cards.filter(card => card.suit === 'Clubs');
	const hearts = mockDeck.cards.filter(card => card.suit === 'Hearts');
	const diamonds = mockDeck.cards.filter(card => card.suit === 'Diamonds');

	assert(spades.length === clubs.length && spades.length === hearts.length &&
	 spades.length === diamonds.length);
});

it('Instance of Deck has expected number of each card value', () => {
	const spades = mockDeck.cards.filter(card => card.suit === 'Spades');
	const clubs = mockDeck.cards.filter(card => card.suit === 'Clubs');
	const hearts = mockDeck.cards.filter(card => card.suit === 'Hearts');
	const diamonds = mockDeck.cards.filter(card => card.suit === 'Diamonds');

	expectedSet = new Set(Deck.VALUES);
	spadesSet = new Set(spades.map(card => card.value));
	clubsSet = new Set(clubs.map(card => card.value)); 
	heartsSet = new Set(hearts.map(card => card.value));
	diamondsSet = new Set(diamonds.map(card => card.value));

	assert(setsEqual(expectedSet, spadesSet) && setsEqual(expectedSet, clubsSet) &&
	 setsEqual(expectedSet, heartsSet) && setsEqual(expectedSet, diamondsSet));
});

it('Deal method returns card from top of the deck', () => {
	const newDeck = new Deck(); 
	const expectedCard = newDeck.cards[0];
	const actualCard = newDeck.deal();

	assert(compareCards(expectedCard, actualCard));
});

it('Deal method removes card from top of the deck list', () => {
	const newDeck = new Deck(); 
	const origLength = newDeck.cards.length;
	newDeck.deal();
	const newLength = newDeck.cards.length;

	assert(origLength - 1 === newLength);
});

it('Shuffle method shuffles same deck in different order', () => {
	const newDeck = new Deck(); 
	const origDeck = newDeck;
	newDeck.shuffle();

	const originalCards = origDeck.cards.map(card => card.suit+card.value);
	const originalSet = new Set(originalCards);
	const newCards = newDeck.cards.map(card => card.suit+card.value);
	const newSet = new Set(newCards); 
	assert(setsEqual(originalSet, newSet) && originalCards !== newCards);
});

/**
* Helper method to compare two sets
* @param {Set} setA
* @param {Set} setB
* @return {boolean} whether sets contain the same values or not
*/
function setsEqual(setA, setB) {
	if (setA.size !== setB.size) {
		return false; 
	}

	for (var valueA of setA) {
		if (!setB.has(valueA)) {
			return false;
		}
	}

	return true;
}

/**
* Helper method to compare two cards
* @param {Card} cardA
* @param {Card} cardB
* @return {boolean} whether Cards are the same or not
*/
function compareCards(cardA, cardB) {
	return cardA.suit === cardB.suit && cardA.value === cardB.value; 
}