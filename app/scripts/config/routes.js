/**
 * Created by gurushantu on 06-02-2015.
 */

module.exports = function(app) {

  require('../routes/dashboard.route')(app);
  require('../routes/organizations.route')(app);
  require('../routes/project.route')(app);
  require('../routes/employee.route')(app);

  app.use("/api/*", function(req, res){
    res.json({"Error": "Page not found"}, 404);
  })

  app.use("*", function(req, res){
    res.send("<html><body><h1>404 - No page found.</h1></body></html>");
  })

};
