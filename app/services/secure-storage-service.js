import SInfo from 'react-native-sensitive-info';

const sharedPreferencesName = 'lemonSecureSharedPrefs';
const keychainService = 'lemonSecureKeyChain';

/**
 * Set key value data into a secure Storage.
 * ---
 * @param {String} key
 * Key value.
 * @param {Any} value
 * Value to save into a secure storage.
 * @param {Object} options
 * Object with option, see the following page to see the complete list https://mcodex.dev/react-native-sensitive-info/docs/ios_options/
 * @returns Promise<null>
 */
export const setSecureItem = async (key, value, options = {}) =>
  SInfo.setItem(key, JSON.stringify(value), {
    ...options,
    sharedPreferencesName,
    keychainService,
  });

/**
 * Get with the key a value from the secure Storage.
 * ---
 * @param {String} key
 * Key value.
 * @param {Object} options
 * Object with option, see the following page to see the complete list https://mcodex.dev/react-native-sensitive-info/docs/ios_options/
 * @returns Item from the Secure Storage
 */
export const getSecureItem = async (key, options = {}) =>
  JSON.parse(
    await SInfo.getItem(key, {
      ...options,
      sharedPreferencesName,
      keychainService,
    }),
  );

/**
 * Get all values from the secure Storage.
 * ---
 * @param {Object} options
 * Object with option, see the following page to see the complete list https://mcodex.dev/react-native-sensitive-info/docs/ios_options/
 * @returns Items from the Secure Storage [{key: string, value: string, service: string}]
 */
export const getAllSecureItems = async (options = {}) =>
  JSON.parse(
    SInfo.getAllItems({
      ...options,
      sharedPreferencesName,
      keychainService,
    }),
  );

/**
 * Delete item from the secure Storage.
 * ---
 * @param {String} key
 * @returns Promise.
 */
export const deleteSecureItem = async key =>
  SInfo.deleteItem(key, {
    sharedPreferencesName,
    keychainService,
  });
