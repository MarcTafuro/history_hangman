//  === Testing Variables ===
// let gameWord = "winst0on church1ill!";
// let attempt = "I"; // Needs to be made into a upper case letter
// var solveGameAttempt = "Winston Churchill";
// ===========================

String.prototype.toProperCase = function ( ) {
  return this.replace( /\w\S*/g, function( txt ) {
    return txt.charAt( 0 ).toUpperCase( ) + txt.substr( 1 ).toLowerCase( );
  });
};

// this GameWord class creates the gameword formats for the game.
export class GameWord {
  constructor(word) {
    if ( word.length <= 3 ) // Needs to be a word of at least three characters long
      return console.error('Error: Your word must be at least three letters long'); // this will become an error in-game
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



// export { word, wordUserView, wordSet, wordSetHidden };
// export { toProperCase };

// const newGame = new GameWord(gameWord);

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
