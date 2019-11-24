var isAnagram = function(s, t) {
    let hashmap = {};
    for(let i = 0; i < s.length; i++) {
        let n = s[i]
        if(!hashmap[n]) {
            hashmap[n] = 0    
        }
        hashmap[n] += 1;
    }
    for(let i = 0; i < t.length; i++) {
        let n = t[i]
        if(!hashmap[n]) {
            hashmap[n] = 0;
        }
        hashmap[n] -= 1;
    }
    return Object.values(hashmap).every((value) => value === 0) || hashmap === {}
};
