const express = require("express");
const boardController = require("../controllers/board");
const isAuth = require("../middleware/is-auth");

/**
 * Router for handling board-related requests.
 * @type {import('express').Router}
 */
const router = express.Router();

/**
 * Route for getting all boards.
 * @name GET /boards
 * @function
 * @memberof module:routes/board~boardRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get("/", isAuth, boardController.getBoards);

/**
 * Route for creating a new board.
 * @name POST /boards
 * @function
 * @memberof module:routes/board~boardRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/", isAuth, boardController.createNewBoard);

/**
 * Route for getting a board by ID.
 * @name GET /boards/:boardId
 * @function
 * @memberof module:routes/board~boardRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get("/:boardId", isAuth, boardController.getBoardById);

/**
 * Route for updating a board by ID.
 * @name PUT /boards/:boardId
 * @function
 * @memberof module:routes/board~boardRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put("/:boardId", isAuth, boardController.updateBoard);

/**
 * Route for deleting a board by ID.
 * @name DELETE /boards/:boardId
 * @function
 * @memberof module:routes/board~boardRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete("/:boardId", isAuth, boardController.deleteBoard);

module.exports = router;
