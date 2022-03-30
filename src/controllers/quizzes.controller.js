const mongoose = require("mongoose");
const Quiz = require("../models/Quiz");

const findAllQuizzes = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    if (!quiz) {
      return res.status(404).json({ message: `Sin quizzes` });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error al buscar`,
    });
  }
};
const findOneQuiz = async (req, res) => {
  const id = req.params.id;

  try {
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res
        .status(404)
        .json({ message: `La quiz con el id ${id} no existe` });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error al buscar la quiz con id ${id}`,
    });
  }
};
const createQuiz = async (req, res) => {
    if (!req.body.question) {
        return res.status(400).json({ message: "Este campo no puede estar vacío" });
      }

      try {
        const newQuiz = new Quiz({
          question: req.body.question,
          answers: req.body.answers,
          correct_answers:req.body.correct_answers
        });
        const quizGuardada = await newQuiz.save();
    
        res.json(quizGuardada);
      } catch (error) {
        res
          .status(500)
          .json({ message: error.message || "Error al guardar la información" });
      }
};
module.exports = { createQuiz, findAllQuizzes, findOneQuiz };
