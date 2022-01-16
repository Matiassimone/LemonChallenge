import SInfo from 'react-native-sensitive-info';

import {devLogger} from './log-service';

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
export const getSecureItem = async (key, options = {}) => {
  try {
    return JSON.parse(
      await SInfo.getItem(key, {
        ...options,
        sharedPreferencesName,
        keychainService,
      }),
    );
  } catch (e) {
    devLogger('getPublicItem', e, true);
  }
};

/**
 * Get all values from the secure Storage.
 * ---
 * @param {Object} options
 * Object with option, see the following page to see the complete list https://mcodex.dev/react-native-sensitive-info/docs/ios_options/
 * @returns Items from the Secure Storage [{key: string, value: string, service: string}]
 */
export const getAllSecureItems = async (options = {}) => {
  try {
    return JSON.parse(
      SInfo.getAllItems({
        ...options,
        sharedPreferencesName,
        keychainService,
      }),
    );
  } catch (e) {
    devLogger('getPublicItem', e, true);
  }
};

/**
 * Delete item from the secure Storage.
 * ---
 * @param {String} key
 * @returns Promise.
 */
export const deleteSecureItem = async key =>
  await SInfo.deleteItem(key, {
    sharedPreferencesName,
    keychainService,
  });
