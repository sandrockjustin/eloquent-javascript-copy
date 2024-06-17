////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(x, y, step = 1) {
  /*
  // if (x, y) arguments are the same number, or if there is no whole number between them
  if (x === y || x + 1 === y || y - 1 === x){
    return [];
  }

  let output = [];

  
  // if the starting number (x) is less than the ending number (y)
  if (x < y){

    // for each number between (x) and (y), push to the output
    for (x += 1; x < y; x++){
      output.push(x);
    }

  // if the starting number (x) is greater than the ending number (y)
  } else if (x > y){

    // for each number between (x) and (y), push to the output
    for (x -= 1; x > y; x--){
      output.push(x);
    }

  }
  */

  let output = [];

  // if (x, y) arguments are the same number, or if there is no whole number between them
  if (x === y || step < 0){
    return [];
  }

  for (x; x <= y; x += step){
    output.push(x);
  }

  // once tasks are complete, return the output
  return output;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {

  let output = 0;

  if (array.length === 0 || array === undefined){
    return output;
  }

  for (let i = 0; i < array.length; i++){
    output += +(array[i]);
  }

  return output;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {

  let output = [];

  if (array.length === 0){
    return [];
  }

  for (let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }

  return output;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

  if (array.length === 0){
    return [];
  }

  for (let i = 0; i < array.length; i++){
    array.splice(i, 0, array.pop());
    console.log(array);
  }

  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

  let rest = null;

  // base case
  if (array.length === 0){
    return rest;
  }

  // recursive statement
  return {value: array[0], rest: arrayToList(array.slice(1))}

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(object, output = []) {

  // base case, probably needs work
  if (object.rest === null) {

    output.push(object["value"])
    return output;

  }

  output.push(object["value"]);

  // recursive statement

  // this example was provided by professor
  // we can do this because we are passing in the object contained in "rest" as our new argument
  // each iteration will make the current "rest" object the new argument, and will target the subsequent
  // rest inside of the current "rest" object
  return listToArray(object.rest, output);

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function prepend(input, list, output = {}) {

  /*
  if (input.length === 0){
    return list;
  }
  
  // turns the target list into an array
  list = listToArray(list);
  
  // adds the first element of our input to the list
  list.unshift(input[0]);
  
  // assigns the object return value of arrayToList being invoked on our object
  output = (arrayToList(list));
  
  // returns three items:
    // a slice of our input, exlcuding the value we added
    // our new list (output), being provided as the argument for the list parameter
    // reset of our output parameter to an empty {}
  return prepend(input.slice(1), output, {});
  */

  if (input === 0){
    return arrayToList(list);
  }
  
  // turns the target list into an array
  list = listToArray(list);
  
  // adds the first element of our input to the list
  list.unshift(input);
  
  return prepend(0, list, {});

};

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, targetIndex) {
  
  let output = listToArray(list);
  
  return output[targetIndex];
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function deepEqual(x, y) {

  // if x and y are both Arrays
  if (Array.isArray(x) && Array.isArray(y)){
    
    // if they have the same length
    if (x.length === y.length){
      
      // for every item in the arrays
      for (let i = 0; i < x.length; i++){
        
        // if the item does not match between arrays
        if (x[i] !== y[i]){
          
          // return false, they are not deeply equal
          return false;
          
        }
        
      }
      
      // if every item passes the For Loop then it is deeply equal
      return true;
      
    // if they don't have the same length, then not deeply equal anyway
    } else {
      
      return false;
      
    }
  
  // if x and y are not Arrays, let us test to see if they are objects
  } else if (typeof x === "object" && typeof y === "object"){
    
    // if x and y are both empty objects
    if (x === {} || y === {}){
      
      // they are deeply equal, return true
      return true;
      
    } else {
      
      // for every key in x
      for (var key in x){
        
        // if y does not have the same property as x
        if (!y.hasOwnProperty(key)){
          
          return false;
          
        }
        
        // if x[key] is a nested array
        if (Array.isArray(x[key]) === true){
          
          for (let i = 0; i < x[key].length; i++){
            
            if (x[key][i] !== y[key][i]){
              
              return false;
              
            }
            
          }
          
        } else if (typeof x[key] === "object" && typeof y[key] === "object"){
          
          for (var subkey in x[key]){
           
            if (Array.isArray(y[key][subkey]) === true){
          
              for (let i = 0; i < y[key][subkey].length; i++){

                if (x[key][subkey][i] !== y[key][subkey][i]){

                  return false;

                }

              }

            } else if (x[key][subkey] !== y[key][subkey]){

              return false;

            } 
            
          }
          
        } else if (x[key] !== y[key]){
          
          return false;
          
        }
        
      }
      
      // for every key in y
      for (var key in y){
        
        // if x does not have the same property as y
        if (!x.hasOwnProperty(key)){
          
          return false;
          
        }
        
        // if y[key] is a nested array
        if (Array.isArray(y[key]) === true){
          
          for (let i = 0; i < y[key].length; i++){
            
            if (x[key][i] !== y[key][i]){
              
              return false;
              
            }
            
          }
          
        } else if (typeof x[key] === "object" && typeof y[key] === "object"){
          
          for (var subkey in x[key]){
           
            if (Array.isArray(y[key][subkey]) === true){
          
              for (let i = 0; i < y[key][subkey].length; i++){

                if (x[key][subkey][i] !== y[key][subkey][i]){

                  return false;

                }

              }

            } else if (x[key][subkey] !== y[key][subkey]){

              return false;

            } 
            
          }
        }else if (x[key] !== y[key]){
          
          return false;
          
        }
        
      }
      
      // if all tests for the objects pass, return true
      return true;
      
    }
    
  } else {
    
    if (x === y){
      return true;
    }
    
    return false;
    
  }

}
  

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};