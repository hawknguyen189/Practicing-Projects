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
ideasRouter.param("ideaId", (req, res, next, id) => {
  req.id = String(id);
  next();
});
ideasRouter.get("/:ideaId", (req, res, next) => {
  res.status(200).send(getFromDatabaseById("ideas", req.id));
});
ideasRouter.put("/:ideaId", (req, res, next) => {
  res.status(204).send(updateInstanceInDatabase("ideas", req.body));
});
ideasRouter.post("/", (req, res, next) => {
  res.status(200).send(addToDatabase("ideas", req.body));
});
ideasRouter.delete("/:ideaId", (req, res, next) => {
  res.status(204).send(deleteFromDatabasebyId("ideas", req.id));
});
ideasRouter.delete("/", (req, res, next) => {
  res.status(204).send(deleteAllFromDatabase("ideas"));
});

module.exports = ideasRouter;