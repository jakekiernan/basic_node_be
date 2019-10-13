var controllers = require('./../controllers/controller.js');

module.exports = app => {
  app.post('/addUser', controllers.addUser);
  app.get('/getUser/:id', controllers.getUser);
  app.get("/getAllUsers", controllers.getAllUsers);
}
