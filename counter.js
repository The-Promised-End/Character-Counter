function countLetters(word) {
  var counts = {};
  for (var i = 0; i < word.length; i++) {
    var character = word.charAt(i);
    if (counts[character]) {
      counts[character]++;
    } else {
      counts[character] = 1;
    }
  }

  return counts;
};

console.log(countLetters("lighthouse in the house"))