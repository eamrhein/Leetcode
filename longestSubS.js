 */
var lengthOfLongestSubstring = function(s) {
    let sub = "";
    let temp = "";
    for(let i = 0; i < s.length; i += 1) {
        let letter = s[i];
        if(temp.includes(letter)){
            if(temp.length > sub.length) {
             sub = temp;    
            }
            temp = "";
        } else {
            temp += letter;
        }
    }
    return temp.length > sub.length ? temp.length : sub.length
};
