import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {createStandardResponse} from '../helpers/services-helper';

/**
 * It is mandatory to call this method before attempting to call useSignIn().
 * ---
 * @param {Object} options
 * Object that can contain the following props
 * ```
 * // [Android] what API you want to access on behalf of the user, default is email and profile
 * scopes: ['https://www.googleapis.com/auth/drive.readonly'],
 *
 * // client ID of type WEB for your server (needed to verify user ID and offline access)
 * webClientId: '<FROM DEVELOPER CONSOLE>',
 *
 * // if you want to access Google API on behalf of the user FROM YOUR SERVER
 * offlineAccess: true,
 *
 * // specifies a hosted domain restriction
 * hostedDomain: '',
 *
 * // [Android] related to `serverAuthCode`, read the docs link below *.
 * forceCodeForRefreshToken: true,
 *
 * // [Android] specifies an account name on the device that should be used
 * accountName: '',
 *
 * // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
 * iosClientId: '<FROM DEVELOPER CONSOLE>',
 *
 * // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
 * googleServicePlistPath: '',
 *
 * // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
 * openIdRealm: '',
 *
 * // [iOS] The desired height (and width) of the profile image. Defaults to 120px
 * profileImageSize: 120,
 * ```
 */
export const useGoogleSignConfig = (options = {}) => {
  GoogleSignin.configure({
    ...options,
  });
};

/**
 * Prompts a modal to let the user sign in into your application.
 * ---
 * @param {String} loginHint
 * [iOS] The user's ID, or email address,
 * to be prefilled in the authentication UI if possible.
 *
 * @returns `Object` standard response
 */
export const useSignIn = async loginHint => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn(loginHint);
    return createStandardResponse(userInfo);
  } catch (error) {
    return createStandardResponse(error.code, error);
  }
};

/**
 * SignIn Silently
 * ---
 * @returns `Object` standard response
 */
export const useSignInSilently = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return createStandardResponse(userInfo);
  } catch (error) {
    return createStandardResponse(error.code, error);
  }
};

/**
 * This method may be used to find out whether some user is currently signed in.
 * ---
 * @returns `Boolean` isSignedIn
 */
export const useIsSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  return isSignedIn;
};

/**
 * This method resolves with null or userInfo object.
 * ---
 * @returns `Object` standard response
 */
export const useGetCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  return currentUser
    ? createStandardResponse(currentUser)
    : createStandardResponse(statusCodes.SIGN_IN_REQUIRED, true);
};

/**
 * Signs out the current user.
 * ---
 * @returns `Object` standard response
 */
export const useSignOut = async () => {
  try {
    await GoogleSignin.signOut();
    return createStandardResponse('SignedOut');
  } catch (error) {
    return createStandardResponse(error, true);
  }
};
