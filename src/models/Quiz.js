const { Schema, model } = require("mongoose");

const quizSchema = new Schema(
  {
    question: { type: String, required: true },
    answers: {
      answer_a: { type: String, required: true },
      answer_b: { type: String, required: true },
      answer_c: { type: String, required: true },
      answer_d: { type: String, required: true },
      answer_e: { type: String, required: true },
      answer_f: { type: String, required: true },
      answer_g: { type: String, required: true },
    },
    correct_answers: {
      answer_a_correct: { type: Boolean, required: true },
      answer_b_correct: { type: Boolean, required: true },
      answer_c_correct: { type: Boolean, required: true },
      answer_d_correct: { type: Boolean, required: true },
      answer_e_correct: { type: Boolean, required: true },
      answer_f_correct: { type: Boolean, required: true },
      answer_g_correct: { type: Boolean, required: true },
    },
  },
  { versionkey: false, timestamps: true }
);

module.exports = model("Quiz", quizSchema);
