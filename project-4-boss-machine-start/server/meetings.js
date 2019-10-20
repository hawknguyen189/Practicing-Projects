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
meetingsRouter.post("/", (req, res, next) => {
  const newMeeting = createMeeting();
  res.status(200).send(addToDatabase("meetings", newMeeting));
});
meetingsRouter.delete("/", (req, res, next) => {
  res.status(204).send(deleteAllFromDatabase("ideas"));
});

module.exports = meetingsRouter;