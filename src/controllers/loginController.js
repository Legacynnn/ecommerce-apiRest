const userModel = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const middleware = require('../middlewares/index')

const authConfig = require('../../config/jwt.json')

const loginController = {
  async createSession(req, res) {
    const { username, password } = req.body;

    try {
      const user = await userModel.findOne({ username }).select("+password");

      if (!user){
          return res.status(400).json({ error: "User not found" })
      }
      
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({error: "Invalid Password"});
      }

      user.password = undefined

      const token = jwt.sign({ id: user.id }, authConfig.secret, {
          expiresIn: 86400,
      } )

      res.json({user, token})


    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

module.exports = loginController;
