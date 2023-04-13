// 387. First Unique Character in a String
/* const firstUniqChar = (s) => {
  const map = new Map();
  const setDuplicated = new Set();
  for (let i = 0; i < s.length; i += 1) {
    const currentLetter = s[i];
    if (map.has(currentLetter)) {
      setDuplicated.add(currentLetter);
    } else {
      map.set(currentLetter, i);
    }
  }
  for (const [key, value] of map.entries()) {
    if (!setDuplicated.has(key)) return value;
  }
  return -1;
};
console.log(firstUniqChar("leetcode"));
 */
