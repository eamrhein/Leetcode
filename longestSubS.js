const lengthOfLongestSubstring = function (s) {
  let sub = "";
  let temp = "";
  for (let i = 0; i < s.length; i += 1) {
    const letter = s[i];
    if (temp.includes(letter)) {
      if (temp.length > sub.length) {
        sub = temp;
      }
      temp = temp.slice(0);
    } else {
      temp += letter;
    }
  }
  return temp.length > sub.length ? temp.length : sub.length;
};
