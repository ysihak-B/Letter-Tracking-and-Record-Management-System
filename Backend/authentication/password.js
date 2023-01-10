const CryptoJS = require("crypto-js");

/**
 * It takes a password, encrypts it using the AES encryption algorithm, and returns the encrypted
 * password
 * @param password - The password to be hashed
 * @returns A string
 */
function hashPassword(password) {
  return CryptoJS.AES.encrypt(password, process.env.PASS_KEY).toString();
}
/**
 * It takes the password that the user signed up with and the password that the user is trying to login
 * with and compares them
 * @param signUpPassword - The password that was encrypted and stored in the database
 * @param loginPassword - The password that the user entered in the login form
 * @returns A boolean value
 */
function IsPasswordCorrect(signUpPassword, loginPassword) {
  const decryptPassword = CryptoJS.AES.decrypt(
    signUpPassword,
    process.env.PASS_KEY
  );
  if (decryptPassword.toString(CryptoJS.enc.Utf8) != loginPassword) {
    return false;
  }

  return true;
}

module.exports = {
  hashPassword,
  IsPasswordCorrect,
};
