const express = require('express');
const ideasRouter = express.Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");
ideasRouter.get("/", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("ideas"));
});


module.exports = ideasRouter;