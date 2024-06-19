// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {

  let localArray = [];

  // for every array in arrays argument
  for (let i = 0; i < arrays.length; i++){

    // for every item in nested array
    for (let x = 0; x < arrays[i].length; x++){

      localArray.push(arrays[i][x]);

    }

  }

  return localArray;

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(n, test, update, body) {

  // for every item
  for (let i = n; test(i); i = update(i)){

    body(i);

  }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {

  for (let i = 0; i < array.length; i++){

    if (func(array[i]) === false){

      return false;

    }

  }

  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {

  // must use scripts.js in this project, find it in explorer

  //IMPORT
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script.direction;
      }
    }
    return null;
  }
  //IMPORT

  let ltr = 0;
  let rtl = 0;

  // for every character in our string
  for (let i = 0; i < string.length; i++){

    if (characterScript(string.charCodeAt(i)) === "ltr"){

      ltr += 1;

    } else if (characterScript(string.charCodeAt(i)) === "rtl"){

      rtl += 1;

    }

  }

  if (ltr > rtl){
    return "ltr";
  } else {
    return "rtl";
  }

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};