
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) {

  let localString = "";
  
  for (let i = 1; i <= number; i++){
    
    localString += "#";
    console.log(localString);
    
  }

}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  for (start; start <= end; start++){

    // double conditional expression must come first or other code block might incorrectly execute
    if ((start % 5 === 0) && (start % 3 === 0)) {

        console.log("fizzbuzz");
    
    // checks to see if number i is a multiple of 5
    } else if (start % 5 === 0) {

        console.log("buzz");
    
    // checks to see if number i is a multiple of 3
    } else if (start % 3 === 0) {

        console.log("fizz");

    // if none of the aforementioned expressions are true, then simply print i to console
    } else {

        console.log(start);

    }

  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this 
" # \n
# #\n
 # \n
# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  
  let localString = "";
  //later used in conditional on Line 41
  function originalBoard(x){
    let localString = [];
    for (let i = 0; i < x; i++){
      
      if (i % 2 == 0){
        localString += "#";
      } else {
        localString += " ";
      }
      
    }
    return localString;
  }

  // later used in conditional on Line 45
  function alternateBoard(x){
    let localString = [];
    for (let i = 0; i < x; i++){
      
      if (i % 2 == 0){
        localString += " ";
      } else {
        localString += "#";
      }
      
    }
    return localString;
  }
  
  // a localString needs to be declared at the top of drawChessboard
  // the localString will need to receive += assignments
  // conditionals will dictate whether a \n is added
  
  for (let y = 0; y < x; y++){
    
    if (y === x - 1){
      if (y % 2 == 0){
        
        localString += (originalBoard(x));
        
      } else {
        
        localString += (alternateBoard(x));
      } 
      
    } else if (y % 2 == 0){

      localString += (originalBoard(x) + "\n");

    } else if (y % 2 == 1){

      localString += (alternateBoard(x) + "\n");

    }
    
  }
  console.log(localString);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}