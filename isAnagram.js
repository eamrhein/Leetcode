const isAnagram = function (s, t) {
  const hashmap = {};
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    if (!hashmap[n]) {
      hashmap[n] = 0;
    }
    hashmap[n] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    const n = t[i];
    if (!hashmap[n]) {
      hashmap[n] = 0;
    }
    hashmap[n] -= 1;
  }
  return Object.values(hashmap).every((value) => value === 0) || hashmap === {};
};
