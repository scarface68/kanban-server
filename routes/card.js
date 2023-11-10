/**
 * Express router providing card related routes
 * @module routes/card
 */

const express = require("express");
const cardController = require("../controllers/card");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

/**
 * Route for creating a new card
 * @name post/
 * @function
 * @memberof module:routes/card
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} controller - Express controller
 */
router.post("/", isAuth, cardController.createNewCard);

/**
 * Route for updating an existing card
 * @name put/
 * @function
 * @memberof module:routes/card
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} controller - Express controller
 */
router.put("/", isAuth, cardController.updateCard);

/**
 * Route for deleting an existing card
 * @name delete/:cardId
 * @function
 * @memberof module:routes/card
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} controller - Express controller
 */
router.delete("/:cardId", isAuth, cardController.deleteCard);

module.exports = router;