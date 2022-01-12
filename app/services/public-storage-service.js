import AsyncStorage from '@react-native-async-storage/async-storage';

import {devLogger} from './log-service';

/**
 *
 * @param {*} key
 * @param {*} value
 */
export const setPublicItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    devLogger('setPublicItem', e, true);
  }

  devLogger('setPublicItem', key, false);
};

/**
 *
 * @param {*} key
 * @returns
 */
export const getPublicItem = async key => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key));
  } catch (e) {
    devLogger('getPublicItem', e, true);
  }
};

/**
 *
 * @param {*} key
 */
export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    devLogger('removeValue', e, true);
  }
};
