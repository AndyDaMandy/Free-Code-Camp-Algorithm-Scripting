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


// Challenge 2
function factorialize(num){
var array = [];
  for (var i = 0; i <= num; i++) {
  array.push(i);
}
 array.shift();
 var answer = array.reduce(function(a,b){
    return a * b;
  }, 1);
  return answer;
  
}

factorialize(5);
// Here's challenge two. I was being tripped up hard because my array was taking in the value of 0. But using shift allowed me to remove the 0.
// Removing the zero was all I needed to do to have .reduce properly multiply the array. The one multiplies it by one so that it returns the answer.
