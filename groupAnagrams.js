const groupAnagrams = function (strs) {
  const hash = {};
  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    if (hash[sorted]) {
      hash[sorted].push(str);
    } else {
      hash[sorted] = [str];
    }
  }
  return Object.values(hash);
};
