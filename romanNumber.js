const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const romanToInt = (S) => {
  let ans = 0;
  for (let i = S.length - 1; ~i; i--) {
    let num = roman[S.charAt(i)];
    // const splt = S.split("");
    // console.log(splt[i]); // same like chartAt
    if (4 * num < ans) ans = ans - num;
    else ans = ans + num;
  }
  return ans;
};
console.log(romanToInt("XXIV"));
