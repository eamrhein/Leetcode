var groupAnagrams = function(strs) {
    let hash ={}
    for(let str of strs) {
        let sorted = str.split("").sort().join("")
        if(hash[sorted]){
            hash[sorted].push(str)
        }else {
            hash[sorted] = [str]
        }
    }
    return Object.values(hash)
};
