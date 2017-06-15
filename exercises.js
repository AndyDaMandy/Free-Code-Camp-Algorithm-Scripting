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


// Challenge 3
function palindrome(str) {
  var removed = str.replace(/[^a-zA-Z0-9]/g, '');
  removed = removed.toLowerCase();
  
  var array = [];
 array = removed.split("");
  
  var joined = array.join("");

  var backwards = [];
  backwards = array.reverse();
  
  var backwardsJoined = backwards.join("");

  if (joined === backwardsJoined){
    return true;
  }
  
  else {
    return false;
  }
 
}

palindrome("rac___Aecar");
//Output = false

// Challenge 4
function findLongestWord(str) {

  var array = [];
  var wordLength = 0;
  
  array = str.split(" ");
  
  for (var i = 0; i < array.length; i++){
    if (wordLength < array[i].length){
      wordLength = array[i].length;
    }
    
  }
  return wordLength;
}

findLongestWord("The quick brown fox jumped BN over the lazy dog");
/* I had a bit of trouble with this one (as I always do). I knew I needed to convert into a array.
I also knew that I needed to loop, but my biggest problem was figuring out HOW to get it to stop when it finds the value.
The truth is after some googling I found out that I should use an if statement to handle this. My if statement replaces the value of
of the variable "wordLength" which isa counter for the highest value. What will happen is that if wordLength is LESS than a value
the loop comes across, it will take the value of of the loop. It will do this until the loop runts out ( i < array.length will run its course)
which will then lead the final value of wordLength to be the highest value. It's actually pretty brilliant. 
*/
