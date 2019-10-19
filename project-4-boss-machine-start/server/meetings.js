const express = require('express');
const meetingsRouter = express.Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");
meetingsRouter.get("/", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("meetings"));
});


module.exports = meetingsRouter;