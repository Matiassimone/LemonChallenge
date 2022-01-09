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
