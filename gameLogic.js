/* === Testing Variables ===
let gameWord = "winst0on church1ill!";
let attempt = "I"; // Needs to be made into a upper case letter
var solveGameAttempt = "Winston Churchill";
*/

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


// TESTING
// console.log("If user input is " + gameWord + " this will result in the following variables:");

// Game Word Class
// console.log("wordSet array length: " + newGame.wordSet.length);
// console.log("GameWord length: " + newGame.word.length);
// console.log("word: " + newGame.word);
// console.log("wordUserView: " + newGame.wordUserView);
// console.log("wordSet: " + newGame.wordSet + " (Actual game set)");
// console.log("wordSetHidden: " + newGame.wordSetHidden);

// functions
// console.log(buildCorrectAttemptArray(attempt, newGame.word));
// console.log(revealCorrectAttempt(correctAttemptArray, newGame.wordSet, newGame.wordSetHidden));
// console.log(solveGame(solveGameAttempt, newGame.word));
