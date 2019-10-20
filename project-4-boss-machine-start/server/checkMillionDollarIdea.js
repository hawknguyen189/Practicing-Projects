const checkMillionDollarIdea = (req,res,next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    const total = numWeeks*weeklyRevenue;
    if (total < 1000000 || isNaN(numWeeks) || isNaN(weeklyRevenue)) {
      res.status(400).send("not meet target");
    } else {
      next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
