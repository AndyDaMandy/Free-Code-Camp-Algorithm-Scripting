// Challenge 1
function reverseString(str) {
  
  var array = [];
  array = str.split("");
  array.reverse();
 
 var joinedString = array.join("");
  return joinedString;
}

reverseString("hello");
// The output will be "olleh"
// The idea behind this is to first split the string and put it into an array, then reverse the array, then join the string.
