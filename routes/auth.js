/**
 * Express router instance for authentication routes.
 * @module routes/auth
 */

const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const { signupValidator } = require("../middleware/validators");

/**
 * Route for user signup.
 * @name POST /signup
 * @function
 * @memberof module:routes/auth
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
router.post("/signup", signupValidator, authController.signup);

/**
 * Route for user login.
 * @name POST /login
 * @function
 * @memberof module:routes/auth
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
router.post("/login", authController.login);

module.exports = router;
