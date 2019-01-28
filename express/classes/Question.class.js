const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    number: Number,
    imgPath: String,
    text: String,
    weight: String,
    correctAnswer: String,
    tip: String,
});

module.exports = mongoose.model('Question', QuestionSchema);