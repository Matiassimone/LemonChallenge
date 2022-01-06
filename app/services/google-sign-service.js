import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

/**
 * @param {Object} options
 * Object that can contain the following props :
 *
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
export const useGoogleSignConfig = options => {
  GoogleSignin.configure({
    ...options,
  });
};

/**
 *
 */
export const useSignIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({userInfo});
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export const useIsSignedIn = () => {
  return true;
};
