# Deck of Cards 

Implementation for a deck of cards by Shane Stockall. 

INSTRUCTIONS: Write a simple class in JS (Javascript) to represent a deck of cards with operations to shuffle the deck and to deal one card. While not a requirement today, a likely future enhancement is the need to deal all the cards in a deck. While not strictly required, we value usage instructions, nicely-modeled data, automated tests, and thoughtful consideration of architectural decisions and simplicity-vs-completeness trade-offs.

## Usage Instructions
Built with npm 6.13.7, node 13.10.1

To run unit tests (located under the test directory):
* cd to the root folder
* enter 'npm install' to install dependencies
* enter 'npm run test'

If all goes well, you should see something like this: 

```bash
> @ test /Users/shanestockall/Desktop/DeckOfCards
> mocha

  ✓ Instance of Card can be created
  ✓ Instance of Card has expected values
  ✓ Instance of Deck can be created
  ✓ Instance of Deck has deck array, which is not null
  ✓ Instance of Deck has 52 cards
  ✓ Instance of Deck has expected number of card suits
  ✓ Instance of Deck has expected number of each card value
  ✓ Deal method returns card from top of the deck
  ✓ Deal method removes card from top of the deck list
  ✓ Shuffle method shuffles same deck in different order

  10 passing (9ms)

```

## Further Development
I was going to add a UI to this for fun, but including a build with webpack or browserify seemed a little bit overkill for the sake of this assignment and the suggested 2 hour time limit. It would be totally possible. 

In Deck.js I also included the suggested improvement for the deal function (line 57). 

## File structure 

All node dependencies are for Mocha, the unit test suite that I used for this assignment

```bash
.
├── node_modules
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── Card.js
│   └── Deck.js
└── test
    ├── Card.test.js
    └── Deck.test.js

```

