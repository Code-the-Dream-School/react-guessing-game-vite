//find if a string is palindrome
// tenet -> tenet

//if string lenght is is equal to odd number
// find middle letter as base case

// function isPalindrome

//call function
function isPalindrome(s, left, right) {
  // base case
  //  if the pointers have met in the middle, it's a palindrome
  if (left >= right) return true;

  // if characters don't match, it's not a palindrome
  if (s[left] != s[right]) return false;

  // recursive case
  return isPalindrome(s, left + 1, right - 1);
}
console.log();
