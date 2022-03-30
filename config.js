require("dotenv").config();

const mongo = {
  mongodbUrl: process.env.DBURI || "mongodb://localhost/quizzes",
};

module.exports = mongo;
