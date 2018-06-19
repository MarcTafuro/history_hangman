/* 
Choosing a Gameword
gameWord must be able to be shown as both an array and a string. logic is in.
gameWord should be chosen by the teacher. (need front-end to do this, partially done.)
gameWord needs to exist in a hidden state and a shown state. logic is in.
gameWord elements (letters) must be visible interchangable between hidden and shown. logic is in.

Playing the game.
attempts or guesses by the player must reveal a letter. logic is in.
attempts or guesses by the player must iterate show multiple matches. logic is in.
attempts or guesses need to match regardless of being uppercase or lowercase. done.
spaces should auto-magically be solved. Done.
player can attempt to solve the puzzle, receive a correct or incorrect message.
*/

let gameWord = "winst0on church1ill!";
let attempt = "I"; // Needs to be made into a upper case letter
var solveGameAttempt = "Winston Churchill";


// (below) Need to place 'toProperCase' in a seperate file for text manipulation.
String.prototype.toProperCase = function ( ) {
  return this.replace( /\w\S*/g, function( txt ) {
    return txt.charAt( 0 ).toUpperCase( ) + txt.substr( 1 ).toLowerCase( );
  });
};


// this GameWord class creates the gameword formats for the game.
class GameWord {
  constructor(word) {
    if ( word.length <= 3 )
      return console.error('Error: Your word must be at least three letters long');

    this.word = word
      .replace( /[^a-zA-Z\s]/g, '' ) // ^a-zA-Z\s captures all non-alpha characters but leaves spaces.
      .toUpperCase(); 
    this.wordUserView = this.word.toProperCase( );
    this.wordSet = this.word.split( '' );

// (below) returns a set of spaces and blanks at which to guess. Simple version.
  const len = this.wordSet.length;
  var i = 0;

  this.wordSetHidden = [ ];

    for ( i = 0; i < this.wordSet.length; i++ ) {
      if (/[^\s]/.test( this.wordSet[i] )) {
        this.wordSetHidden.push( "*" ); 
      } else {
        this.wordSetHidden.push( " " );
      }
    }
  }
};


// TESTING SETUP
let newGame = new GameWord(gameWord);

// Continued logic will not work without a gameWord established.
// Probably needs a seperate js file.

// This works, but doesn't reveal repeated letters. Need a version that recurses over the whole word.
// const attemptIndex = newGame.wordSet.findIndex(element => element == attempt);


var correctAttemptArray = [ ];

function buildCorrectAttemptArray( attempt, wordSet ) {
  var i = 0;
  while ( i < wordSet.length ) {
    if ( attempt == wordSet[i] ) {
      correctAttemptArray.push( i );
      i++;
    } else {
      i++;
    }
  }
  console.log( correctAttemptArray ); // change to return once we have front-end functionallity
};


function revealCorrectAttempt( correctAttemptArray, wordSet, wordSetHidden ) {
  for ( i = 0; i < correctAttemptArray.length; i++ ) {
    wordSetHidden.splice( correctAttemptArray[i], 1, wordSet[correctAttemptArray[i]] );
  }
  console.log( wordSetHidden );
};


function solveGame( solveGameAttempt, word ) {
  solveGameAttempt = solveGameAttempt.toUpperCase();
  if ( solveGameAttempt == word ) {
    console.log( "Great job, you solved the word: " + word );
  }
  else 
    console.log( "Sorry, that is not correct. " + newGame.wordSetHidden )
};


// TESTING
console.log("If user input is " + gameWord + " this will result in the following variables:");

// Game Word Class
console.log("wordSet array length: " + newGame.wordSet.length);
console.log("GameWord length: " + newGame.word.length);
console.log("word: " + newGame.word);
console.log("wordUserView: " + newGame.wordUserView);
console.log("wordSet: " + newGame.wordSet + " (Actual game set)");
console.log("wordSetHidden: " + newGame.wordSetHidden);

// functions
console.log(buildCorrectAttemptArray(attempt, newGame.word));
console.log(revealCorrectAttempt(correctAttemptArray, newGame.wordSet, newGame.wordSetHidden));
console.log(solveGame(solveGameAttempt, newGame.word));
// console.log("Attempt Index: " + attemptIndex);