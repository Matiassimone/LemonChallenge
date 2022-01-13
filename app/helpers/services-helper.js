/**
 * Create a standard response object
 * ---
 * @param {Any} data
 * @param {Boolean} error
 * @returns Object
 */
export const createStandardResponse = (data, error = false) => {
  return {
    data,
    error,
  };
};

/**
 * sortArrayOfObjects
 * ---
 * @param {*} arr
 * @param {*} propertyAccessor
 * @returns
 */
export const sortArrayOfObjects = (arr, propertyAccessor) => {
  return arr.sort((a, b) =>
    a[propertyAccessor] < b[propertyAccessor] ? -1 : 1,
  );
};
