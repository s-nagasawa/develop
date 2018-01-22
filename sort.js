const sortNumber = number => {
  number.sort((a,b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  });
};

// コメント追加してみた
const number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);const number = [];