const jwt = require("jsonwebtoken");

exports.generateAuthToken = (user) => {
  /**
   * Generates a JSON Web Token (JWT) for the given user.
   *
   * @param {Object} user - The user object to generate the token for.
   * @param {string} user.email - The email address of the user.
   * @param {string} user._id - The unique ID of the user.
   * @returns {string} The generated JWT.
   */
  const token = jwt.sign({ email: user.email, userId: user._id }, "secret", {
    expiresIn: "1h",
  });
  return token;
};
