//const { Router } = require("express");
//const router = Router();
const QuizController=require('../controllers/quizzes.controller')
const router = require("express").Router();

router.get("/quiz", QuizController.findAllQuizzes);

router.get("/quiz/:id", QuizController.findOneQuiz);

router.post("/", QuizController.createQuiz)
module.exports = router;
