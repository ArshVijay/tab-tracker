const AuthencationController = require('./controllers/AuthenticationController')

const AuthencationControllerPolicy = require('./policies/AuthencationControllerPolicy')
module.exports = (app) => {
  app.post('/register',
  AuthencationControllerPolicy.register,
  AuthencationController.register)
}
