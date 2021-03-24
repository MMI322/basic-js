const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof (sampleActivity) !== 'string') || (Number(sampleActivity) == NaN) || (sampleActivity === undefined) || (!sampleActivity) || (Number(sampleActivity) === 0)) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
  if (result > 0) {
    return result;
  } else {
    return false;
  }
};
