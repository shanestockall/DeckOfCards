const Card = require('../src/Card.js');
const assert = require('assert'); 

it('Instance of Card can be created', () => {
	assert(new Card('Spades', '2'));
});

it('Instance of Card has expected values', () => {
	const card = new Card('Spades', '2');
	assert(card.suit === 'Spades');
	assert(card.value === '2');
});

