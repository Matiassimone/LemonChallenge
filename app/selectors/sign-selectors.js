export const signed = state => state.signed;
export const signinInProgress = state => state.signinInProgress;
export const error = state => state.error;

export const userInfo = state => state.userInfo;
export const idToken = state => state.userInfo.idToken;
export const serverAuthCode = state => state.userInfo.serverAuthCode;
export const user = state => state.userInfo.user;
export const userName = state => state.userInfo.user.name;
export const userPhoto = state => state.userInfo.user.photo;
export const userEmail = state => state.userInfo.user.email;

export const fetchStorageData = state => state.fetchStorageData;
export const googleSignConfig = state => state.googleSignConfig;
export const useSignIn = state => state.useSignIn;
export const useSignOut = state => state.useSignOut;
