// var reAlpha = /[a-zA-Z]/;
// var reSpace = /\s/;
// var arr = ["W", "i", "n", "s", "t", "o", "n", " ", "1", 2, 0];
// var newArr = [];

const wordSet = [ 'W','i','n','s','t','o','n',' ','C','h','u','r','c','h','i','l','l' ];
const wordSetHidden = [ '*','*','*','*','*','*','*','_','*','*','*','*','*','*','*','*','*','*' ];
const attempt = 'i';

// for ( var i = 0; i < arr.length; i++ ) {
//   var element = arr[i];
//   switch (element) {
//     case element.match(reAlpha):
//       newArr.push(arr[i] = "*");

//     case element.match(reSpace):
//       newArr.push(arr[i] = "_");

//     break;
//   default: console.log("No matches")
//   };
// }


// for ( var i = 0; i < arr.length; i++ ) {
//   switch (arr) {
//     case reAlpha.match:
//       newArr.push(arr[i] = "*");
//     case reSpace.match:
//       newArr.push(arr[i] = "_");
//     break;
//   default: console.log("No matches")
//   };
// }

// console.log(newArr);


// This works

// const attemptIndex = newGame.wordSet.findIndex(element => element === attempt);


// var attemptCorrect = '';

// function testAttempt(attemptIndex) {
//   var attemptCorrect = true;
//   if ( attemptIndex >= 0 ) {
//      return attemptCorrect = true;
//   } else {
//      return attemptCorrect = false;
//   }
// };

// console.log(attemptCorrect);

// const attemptIndex = (-1);

// let correctAttemptArray = [];
// i = 0;

// function getAttemptIndex(i, attempt, wordSet) {

//   for( i = i; i <= wordSet.length; i++ ) {
//     if ( attempt == wordSet[i] ) {
//         correctAttemptArray.push(i);
//     } else {
//         getAttemptIndex(i, attempt, wordSet);
//     }
//   }
// };

// console.log(wordSetHidden);
// console.log(getAttemptIndex(i, attempt, wordSet));


var correctAttemptArray = [];

function revealLetter( attempt, wordSet ) {
  var i = 0;
  while ( i < wordSet.length ) {
    if ( attempt == wordSet[i] ) {
      correctAttemptArray.push(i);
      i++;
    } else {
      i++;
    }
  }
  console.log( correctAttemptArray );
};

console.log(wordSetHidden);
console.log(wordSet);
console.log(attempt);

console.log(revealLetter( attempt, wordSet ));