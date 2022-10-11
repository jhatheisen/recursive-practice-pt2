/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

1. saved the first letter
2. saved the rest of the characters as var
3. called the reverse with the str
4. added first letter after the string
5. if str.length === 0, returns ''

***********************************************************************/


function reverse(str) {
  // Your code here
  let firstLetter = str[0];
  let rest = str.slice(1);

  if (str.length === 0) {
    return '';
  }

  return reverse(rest) + firstLetter;

}

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
