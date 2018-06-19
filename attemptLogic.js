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