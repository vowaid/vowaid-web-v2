/**
 * Set the date options formatted for use by react-select.
 *
 * @param {[string]} array An array of strings which will be formatted for use by react-select.
 */
const setOptions = (array) => {
  const options = [];

  for (let index = 0; index < array.length; index++) {
    const value = array[index];

    options.push({
      value,
      label: value,
    });
  }

  return options;
};

/**
 * Description.
 *
 * @enum {[string]}
 */
const Values = {
  MONTHS: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
  YEARS: (() => {
    const years =  [];

    const now = new Date();
    const year = now.getFullYear();
    const yearLimit = year - 100;

    for (let index = year; index >= yearLimit; index--) {
      years.push(index);
    }

    return years;
  })(),
}

/**
 * Description.
 *
 * @enum {[object]}
 */
const Options = {
  MONTHS: setOptions(Values.MONTHS),
  YEARS: setOptions(Values.YEARS),
};

export {
  Values,
  Options,
}
