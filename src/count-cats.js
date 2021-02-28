const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let flatter = backyard.flat();
  let number = 0;
  for (let i = 0; i < flatter.length; i++) {
    if (flatter[i] === '^^') {
      number++
    };
  };
  return number;
};