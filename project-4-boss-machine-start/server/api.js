// const express = require('express');
// const apiRouter = express.Router();
// const {
//   createMeeting,
//   getAllFromDatabase,
//   getFromDatabaseById,
//   addToDatabase,
//   updateInstanceInDatabase,
//   deleteFromDatabasebyId,
//   deleteAllFromDatabase,
// } = require("./db");
// // const minionsRouter = require("./minions");
// const getAllMinions = express.Router();

// apiRouter.use("/minions/", getAllMinions);
// getAllMinions.get("/", (req, res, next) => {
//   console.log("allMinions");
//   const allMinions = getAllFromDatabase("minions");
//   res.send(allMinions);
// });
// // apiRouter.post("/api/minions", getAllFromDatabase("minions"));
// // apiRouter.use('/minions', minionsRouter);

// module.exports = apiRouter;
 
const express = require("express");
const apiRouter = express.Router();

const minionsRouter = require("./minions");
const ideasRouter = require("./ideas");
const meetingsRouter = require("./meetings");
apiRouter.use(express.static("public"));
apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
