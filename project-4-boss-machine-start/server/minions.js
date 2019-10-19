const express = require('express');
const minionsRouter = express.Router();
const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require("./db");
minionsRouter.get("/", (req,res,next) => {
    res.status(200).send(getAllFromDatabase("minions"));
});
minionsRouter.param("minionId", (req,res,next,id) => {
    req.id = Number(id);
})
minionsRouter.get("/:minionId ", (req, res, next) => {
  res.status(200).send(getAllFromDatabase("minions",req.id));
});
minionsRouter.post("/", (req,res,next) => {
    res.status(201).send(addToDatabase("minions",req.body))
})
module.exports = minionsRouter;