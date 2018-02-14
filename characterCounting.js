function countLetters (string) {
  let word = string.split(" ").join("");

  let letterCount = new Object();

  for (let i = 0; i < word.length; i++) {
    if(!letterCount[word[i]]) {
      letterCount[word[i]] = 0;
    }
    letterCount[word[i]]++;
  }
  return letterCount;
}

console.log(countLetters("lighthouse in the house"))