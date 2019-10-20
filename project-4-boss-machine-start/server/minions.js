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
    const minionData = getFromDatabaseById("minions", req.id);
    if (minionData){
        res.status(200).send(minionData);
    } else {
        res.status(404).send("Not a valid ID");
    }
});
minionsRouter.put("/:minionId", (req, res, next) => {
    req.body.id = String(req.body.id);
    const minionData = updateInstanceInDatabase("minions", req.body);
    if (minionData){
        res.status(200).send(minionData);
    } else {
        res.status(404).send("Not a valid ID");
    }
});
minionsRouter.post("/", (req,res,next) => {
    res.status(201).send(addToDatabase("minions",req.body))
})
minionsRouter.delete("/:minionId", (req,res,next) => {
    const minionData = deleteFromDatabasebyId("minions", req.id);
    if (minionData) {
      res.status(204).send();
    } else {
      res.status(404).send("Not a valid ID");
    }
})
minionsRouter.delete("/", (req,res,next) => {
    res.status(204).send(deleteAllFromDatabase("minions"));
})
module.exports = minionsRouter;