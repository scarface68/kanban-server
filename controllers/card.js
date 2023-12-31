const Card = require("../models/card");
const { throwError } = require("../utils/helpers");

exports.createNewCard = async (req, res, next) => {
  const boardId = req.body.boardId;
  const listId = req.body.listId;
  const title = req.body.title;
  const description = req.body.description;
  const checkList = req.body.checkList;
  const priority = req.body.priority;
  const due = req.body.due;
  const labels = req.body.labels;
  const card = new Card({
    title,
    description,
    checkList,
    boardId,
    listId,
    priority,
    due,
    labels,
  });

  try {
    const result = await card.save();
    res
      .status(200)
      .json({ message: "Card added succesfully.", id: result._id });
  } catch (err) {
    next(err);
  }
};

exports.updateCard = async (req, res, next) => {
  const cardId = req.body.cardId;
  const listId = req.body.listId;
  const title = req.body.title;
  const description = req.body.description;
  const checkList = req.body.checkList;
  const priority = req.body.priority;
  const due = req.body.due;
  const labels = req.body.labels;

  try {
    const card = await Card.findById(cardId);
    card.title = title;
    card.description = description;
    card.checkList = checkList;
    card.listId = listId;
    card.priority = priority;
    card.due = due;
    card.labels = labels;

    const result = await card.save();
    res
      .status(200)
      .json({ message: "Card updated succesfully.", id: result._id });
  } catch (err) {
    next(err);
  }
};

exports.deleteCard = async (req, res, next) => {
  const cardId = req.params.cardId;

  try {
    if (!cardId) throwError("CardId is invalid.", 422);

    await Card.deleteOne({ _id: cardId });
    res.status(200).json({
      message: "Card deleted successfully.",
    });
  } catch (err) {
    next(err);
  }
};
