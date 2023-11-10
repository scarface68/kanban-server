const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkListSchema = new Schema({
  body: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const cardSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  checkList: [checkListSchema],
  boardId: { type: Schema.Types.ObjectId, ref: "board", required: true },
  listId: { type: Schema.Types.ObjectId, ref: "list", required: true },
  priority: {type: String},
  due: {type: String},
  labels: [String],
});

module.exports = mongoose.model("Card", cardSchema);
