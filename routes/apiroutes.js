var db = require("../models");

module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    //create new user
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
    })
    .then(post => {
      res.json(post);
    })
  });
}