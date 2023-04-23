const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  author: String,
  year: Number,
  avail: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
