/**
 * Express router providing list related routes
 * @module routes/list
 */

const express = require("express");
const listController = require("../controllers/list");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

/**
 * Route serving creating a new list
 * @name post/
 * @function
 * @memberof module:routes/list
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/", isAuth, listController.createNewList);

/**
 * Route serving updating an existing list
 * @name put/
 * @function
 * @memberof module:routes/list
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put("/", isAuth, listController.updateList);

/**
 * Route serving deleting an existing list
 * @name delete/:listId
 * @function
 * @memberof module:routes/list
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete("/:listId", isAuth, listController.deleteList);

module.exports = router;
