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



// Challenge 5
function largestOfFour(arr) {
var mapped;
var test;
test = arr.map(function sorted(x){
 return x.sort(function compareVal(a, b){
    return b - a;
  });
});

mapped = test.map(function valueZero(z){
  return z[0];
  });
  
  return mapped;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
/* I'm extremely proud of this solution. This is the first time I've ACTUALLY understood how to use map as well as how to next functions
within a function. In thise case, I createda function within map which returns the value of x.sort which contains a function that allows me
to compare the values from largest to smallest. From there, I use map again and take my newly sorted array (test) and return the 0 value of 
part of the array (because map looks at EACH array). This ended up being my first time doing one of these challenges so easily too!
*/


// Challenge 6

function confirmEnding(str, target) {
  var targetTotal = target.length;
  var check = str.substr( - targetTotal, targetTotal);
 
  if (check === target){
    return true;
  }
  else{
    return false;
  }
  
}

confirmEnding("Bastian", "ian");
// This was surprisingly easy. I am impressed with my solution because it seems a bit rickety. 

// Challenge 7
function repeatStringNumTimes(str, num) {
 var array = [];
  var joined;
  
  if (num > 0){
    for (var i = 0; i < num; i++){
      array.push(str);
    } 
  joined = array.join("");
    return joined;
  }
    else {
      return "";
    }
}

repeatStringNumTimes("Bacon", 4);
// This was easy with a for loop. 

// Challenge 8
function truncateString(str, num) {

  var spliced;
  
  if (str.length > num && num > 3){
    var numDown = num -3;
    return str.substr(0, numDown) + "...";
  }
  else if (num >= str.length){
    return str;
  }
  else if (str.length > num && num < 3){
    return str.substr(0 , num) + "...";
  }
  
}

truncateString("Absolutely longer", 2);
// Another easy one. I juse used an if else statement to check the length requirements and returned the string based on those values.
