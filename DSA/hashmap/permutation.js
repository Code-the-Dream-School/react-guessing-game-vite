/**
 * Determines if two strings are permutations of each other.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - Returns true if str2 is a permutation of str1, else false.
 */
// Question: Given two strings, determine if one is a permutation (rearrangement of letters) of the other
const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const letterFrequencyStr1 = {};
  //loop tru str1 to ccount frequncies for str1
  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    if (letterFrequencyStr1[currentLetter]) {
      letterFrequencyStr1[currentLetter] += 1;
    } else {
      letterFrequencyStr1[currentLetter] = 1;
    }
  }
  // loop through str2
  for (let i = 0; i < str2.length; i++) {
    const currentLetter = str2[i];
    //if current letter exist  in the str2, decrement the frequency
    if (letterFrequencyStr1[currentLetter]) {
      letterFrequencyStr1[currentLetter] -= 1;
    } else {
      return false;
    }
    if (letterFrequencyStr1[currentLetter] < 0) {
      return false;
    }
  }
  return true;
};
const str1 = "Hello";
const str2 = "elloH";
console.log(isPermutation(str1, str2));
