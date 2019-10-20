const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require("./checkMillionDollarIdea");
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
ideasRouter.param("ideaId", (req, res, next, id) => {
  req.id = String(id);
  const ideaData = getFromDatabaseById("ideas", req.id);
  if (ideaData) {
    req.idea = ideaData
    next();
  } else {
    res.status(404).send("invalid idea id");
  }
});
ideasRouter.get("/:ideaId", (req, res, next) => {
    res.status(200).send(req.idea);
});
ideasRouter.put("/:ideaId", checkMillionDollarIdea, (req, res, next) => {
  const ideaData = updateInstanceInDatabase("ideas", req.body);
    res.status(200).send(ideaData);

});
ideasRouter.post("/",checkMillionDollarIdea, (req, res, next) => {
  res.status(201).send(addToDatabase("ideas", req.body));
});
ideasRouter.delete("/:ideaId", (req, res, next) => {
  const ideaData = deleteFromDatabasebyId("ideas", req.id);
  if (ideaData) {
    res.status(204).send(ideaData);
  } else {
    res.status(404).send("invalid idea id");
  }
});
ideasRouter.delete("/", (req, res, next) => {
  res.status(204).send(deleteAllFromDatabase("ideas"));
});

module.exports = ideasRouter;