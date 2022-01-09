import create from 'zustand';

import * as googleSignService from '../services/google-sign-service';
import {
  getSecureItem,
  setSecureItem,
  deleteSecureItem,
} from '../services/secure-storage-service';

import {USER_INFO} from '../constants/storage-keys';

const userInfoModel = {
  idToken: '',
  serverAuthCode: '',
  scopes: [],
  user: {
    email: '',
    id: '',
    givenName: '',
    familyName: '',
    photo: '',
    name: '',
  },
};

export const useSignStoreStore = create(set => ({
  signed: false,
  userInfo: userInfoModel,
  error: null,

  fetchStorageData: async () => {
    const userInfo = await getSecureItem(USER_INFO);

    userInfo
      ? set({
          signed: true,
          userInfo,
        })
      : set({
          signed: false,
          userInfo: userInfoModel,
        });
  },

  googleSignConfig: options => googleSignService.useGoogleSignConfig(options),

  useSignIn: async (loginHint = '') => {
    const response = await googleSignService.useSignIn(loginHint);
    const {data, error} = response;

    if (error) {
      set({error: data, signed: false});
    } else {
      set({userInfo: data, signed: true});
      setSecureItem(USER_INFO, data);
    }
  },

  useSignInSilently: async () => {
    const response = await googleSignService.useSignInSilently();
    const {data, error} = response;

    if (error) {
      set({error: data, signed: false});
    } else {
      set({userInfo: data, signed: true});
      setSecureItem(USER_INFO, data);
    }
  },

  useSignOut: async () => {
    const response = await googleSignService.useSignOut();
    const {data, error} = response;

    if (error) {
      set({error: data});
    } else {
      set({userInfo: userInfoModel, signed: false});
      deleteSecureItem(USER_INFO);
    }
  },
}));
