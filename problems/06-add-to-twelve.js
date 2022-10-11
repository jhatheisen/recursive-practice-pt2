/***********************************************************************


Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false

function sumToN(n) {
  // Your code here
  // if starts at or gets to 0, null + 1 = 1
  if (n <= 0 ) {
    return null;
  }

  // sets result to n + n-1,
  let result = sumToN(n - 1) + n;
  // after every num added return result
  return result === 12;
}

Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

***********************************************************************/


function addToTwelve(arr) {
  // Your code here
  if (arr[0] + arr[1] === 12) {
    return true;
  } else if (arr.length <= 1) {
    return false;
  }
  arr.shift();
  return addToTwelve(arr);
}

addToTwelve([1, 3, 4, 7, 5]); // true
// addToTwelve([1, 3, 4, 7, 6]); // false
// addToTwelve([1, 11, 4, 7, 6]); // true
// addToTwelve([1, 12, 4, 7, 6]); // false
// addToTwelve([1]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
