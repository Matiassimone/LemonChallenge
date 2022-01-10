import create from 'zustand';

import * as googleSignService from '../services/google-sign-service';
import {
  getSecureItem,
  setSecureItem,
  deleteSecureItem,
} from '../services/secure-storage-service';

import {devLogger} from '../services/log-service';

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

export const useSignStore = create(set => ({
  signed: false,
  signinInProgress: false,
  userInfo: userInfoModel,
  error: null,

  fetchStorageData: async () => {
    const userInfo = await getSecureItem(USER_INFO);

    if (userInfo) {
      devLogger('fetchStorageData', userInfo, false);
      set({
        signed: true,
        userInfo,
      });
    } else {
      devLogger('fetchStorageData', {signed: false}, true);
      set({
        signed: false,
        userInfo: userInfoModel,
      });
    }
  },

  googleSignConfig: options => googleSignService.useGoogleSignConfig(options),

  useSignIn: async loginHint => {
    set({signinInProgress: true});

    const response = await googleSignService.useSignIn(loginHint);
    const {data, error} = response;

    if (error) {
      devLogger('useSignIn', error, true);
      set({error: data, signed: false});
    } else {
      devLogger('useSignIn', data, false);
      set({userInfo: data, signed: true});
      setSecureItem(USER_INFO, data);
    }

    set({signinInProgress: false});
  },

  useSignInSilently: async () => {
    set({signinInProgress: true});

    const response = await googleSignService.useSignInSilently();
    const {data, error} = response;

    if (error) {
      devLogger('useSignInSilently', error, true);
      set({error: data, signed: false});
    } else {
      devLogger('useSignInSilently', data, false);
      set({userInfo: data, signed: true});
      setSecureItem(USER_INFO, data);
    }

    set({signinInProgress: false});
  },

  useSignOut: async () => {
    const response = await googleSignService.useSignOut();
    const {data, error} = response;

    if (error) {
      devLogger('useSignOut', error, true);
      set({error: data});
    } else {
      devLogger('useSignOut', userInfoModel, true);
      set({userInfo: userInfoModel, signed: false});
      deleteSecureItem(USER_INFO);
    }
  },
}));
