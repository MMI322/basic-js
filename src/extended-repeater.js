const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (!options.repeatTimes) options.repeatTimes = 1;

  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  if (options.addition === undefined) options.addition = '';

  if (!options.separator) options.separator = '+';

  if (!options.additionSeparator) options.additionSeparator = '|';

  if (typeof str !== 'string') String(str);

  let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) +
    options.addition;
  return (str + add + options.separator).repeat(options.repeatTimes - 1) + str + add;

}