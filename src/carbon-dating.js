const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  
  if (typeof(activity) != 'string' ) return false;

  let sampleActivity = parseFloat(activity);

  if (sampleActivity <= 0 || sampleActivity >= 15 || isNaN(sampleActivity)) return false;

  let age = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

  return age;
};
