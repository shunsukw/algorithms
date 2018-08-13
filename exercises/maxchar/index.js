// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var countMap = {}
    var max = 0;
    var maxchar = "";

    for (let char of str) {
        countMap[char] = countMap[char] + 1 || 1
    }

    for (let char in countMap) {
        if (countMap[char] > max) {
            max = countMap[char];
            maxchar = char;
        }
    }

    return maxchar
}

module.exports = maxChar;
