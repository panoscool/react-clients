const storage = localStorage;
const authenticationKey = 'auth';

export default class Authentication {

  /**
   * Retrieves logged in user data or null, if he's not logged in
   */
  static getUserData() {
    const profileData = storage.getItem(authenticationKey);

    return profileData ? JSON.parse(profileData) : {};
  }

  /**
   * Checks whether the user has logged in or not
   */
  static exists() {
    return storage.getItem(authenticationKey) ? true : false;
  }

  /**
   * Receives a profile object and properly persists it on defined storage
   */
  static authenticate(data) {
    const json = JSON.stringify(data);
    storage.setItem(authenticationKey, json);
  }

  /**
   * Destroys current user session by simply deleting storage entry
   */
  static destroy() {
    storage.removeItem(authenticationKey);
  }

  /**
   * Action called after proper authentication
   */
  static success(response) {
    console.log('Authentication', 'Success', response);

    // I only use that part, but you can use anything you'd like
    Authentication.authenticate(response.profileObj);
  }

  /**
   * Action called after failed authentication attempt
   */
  static failure(response) {
    console.error('Authentication', 'failure', response);
  }

}
