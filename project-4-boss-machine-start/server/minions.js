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
    req.id = String(id);
    next();
})
minionsRouter.get("/:minionId", (req, res, next) => {
  res.status(200).send(getFromDatabaseById("minions",req.id));
});
minionsRouter.put("/:minionId", (req, res, next) => {
  res.status(204).send(updateInstanceInDatabase("minions", req.body));
});
minionsRouter.post("/", (req,res,next) => {
    res.status(200).send(addToDatabase("minions",req.body))
})
minionsRouter.delete("/:minionId", (req,res,next) => {
    res.status(204).send(deleteFromDatabasebyId("minions", req.id));
})
minionsRouter.delete("/", (req,res,next) => {
    res.status(204).send(deleteAllFromDatabase("minions"));
})
module.exports = minionsRouter;