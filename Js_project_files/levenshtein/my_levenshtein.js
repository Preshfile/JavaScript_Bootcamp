
//A function must take in 2 strings with the exact number of characters 
//and return an integer representing the difference between them.

function my_levenshtein(str1, str2) {
    const arr1 = str1.split("");
    const arr2 = str2.split("");
    const diff1 = arr1.filter((letter) => !arr2.includes(letter));
    const diff2 = arr2.filter((letter) => !arr1.includes(letter));
  var res = "";
  if (str1 === str2 || res) {
    return 0;
  } else if (str1.length != str2.length) {
    return -1;
  } else {
    return diff1.length + diff2.length;
  }
}