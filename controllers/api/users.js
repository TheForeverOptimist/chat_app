const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt')

async function checkToken(req, res){
    console.log('req.user -> ', req.user);
    res.json(req.exp)
}


async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user)
        res.json(token );
    } catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
}

async function login(req, res) {
    //body = email & password req.body = {email, password}
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user) throw new Error("No user found")
        //check if the password matches the documents
        const matchedPassword = await bcrypt.compare(req.body.password, user.password)

        //if it doesn't I want to respond with an error message
        if (!matchedPassword) throw new Error("Password incorrect");
        //if it does i want to create a token and respond with it
        const token = createJWT(user);
        res.json(token)
    } catch (err) {}
    //look in the db for a matching email
}



//helper functions
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

module.exports = {
    create, login, checkToken
};

