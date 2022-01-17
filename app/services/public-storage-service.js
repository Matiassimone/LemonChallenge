import AsyncStorage from '@react-native-async-storage/async-storage';

import {devLogger} from './log-service';

/**
 * Set key value data into a public Storage.
 * ---
 * @param {String} key
 * @param {Any} value
 */
export const setPublicItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    devLogger('setPublicItem', e, true);
  }

  devLogger(`setPublicItem ${key}`, value, false);
};

/**
 * Get with the key a value from the public Storage.
 * ---
 * @param {String} key
 * @returns Item from the Public Storage
 */
export const getPublicItem = async key => {
  try {
    const json = JSON.parse(await AsyncStorage.getItem(key));
    devLogger(`getPublicItem ${key}`, json, false);
    return json;
  } catch (e) {
    devLogger('getPublicItem', e, true);
  }
};

/**
 * Delete item from the public Storage.
 * ---
 * @param {String} key
 */
export const removeValue = async key => {
  try {
    devLogger('removeValue', key, false);
    await AsyncStorage.removeItem(key);
  } catch (e) {
    devLogger('removeValue', e, true);
  }
};

/**
 * Delete all items from the public Storage.
 * ---
 */
export const removeAllPublicItems = async () => {
  try {
    devLogger(
      'removeAllPublicItems',
      'All public items has been removed from the public storage.',
      false,
    );
    await AsyncStorage.clear();
  } catch (e) {
    devLogger('removeAllPublicItems', e, true);
  }
};
