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
export const sortArrayOfObjects = (arr, propertyAccessor, reverse = false) => {
  return arr.sort((a, b) =>
    reverse
      ? a[propertyAccessor] > b[propertyAccessor]
        ? -1
        : 1
      : a[propertyAccessor] < b[propertyAccessor]
      ? -1
      : 1,
  );
};
