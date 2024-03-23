
const Note = require("../../models/note")
const User = require("../../models/user");
const jwt =  require("jsonwebtoken");
const bcrypt = require('bcrypt');


const create = async (request, respond) => {
   
    try {
        // Add the user to the database
        const user = await User.create(request.body);
        console.log(request.body);
        // token will be a string
        const token = createJWT(user);
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        respond.json(token);
        console.log(token);
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        respond.status(400).json(err);
      }
    }

const find = async (request, respond) => { 
  const id = request.user._id;
  
  try {
    const note = await Note.findById(id);
    respond.json(note);
    if(!note) {
      console.log('no notes');
      respond.json(null);
    }
  } catch (error) {
    respond.status(500).json({ error: 'Internal server error' });
  }
};

    
    function createJWT(user) {
        return jwt.sign(
          // data payload
          { user },
          process.env.SECRET,
          { expiresIn: '24h' }
        );
      }

      const logIn = async (request, respond) => {
      
    
      try {
        const user = await User.findOne({ email: request.body.email });
         
        
        if (!user) {
            
          throw new Error('User not found');
        }
    
        const match = await bcrypt.compare(request.body.password, user.password);
        if (!match) {
          throw new Error('Invalid password');
        }
    
        const token = createJWT(user);
        respond.json( token );
      } catch (error) {
        respond.status(400).json({ error: error.message || 'Login failed' });
      }
    };
    
    function checkToken(req, res) {
      // req.user will always be there for you when a token is sent
 
      res.json(req.exp);
    }

module.exports = {
    create,
    logIn,
    checkToken,
    find,
};



