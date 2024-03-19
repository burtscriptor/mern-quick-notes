// const User = require("../../models/user");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

// function createJWT(user) {
//     return jwt.sign(
//       // data payload
//       { user },
//       process.env.SECRET,
//       { expiresIn: '24h' }
//     );
//   }

// const login = async (request, respond) => {
//     console.log("login endpoint")
//     console.log(request.body.email);
//     console.log(request.body.password);
//   try {
//     const user = await User.findOne({ email: request.body.email });
//     if(user) {
//         console.log('user found this is user =', user );
//     }
//     if (!user) {
//         console.log('user not found');
//       throw new Error('User not found');
//     }

//     const match = await bcrypt.compare(request.body.password, user.password);
//     if (!match) {
//       throw new Error('Invalid password');
//     }

//     const token = createJWT(user);
//     respond.json({ token });
//   } catch (error) {
//     respond.status(400).json({ error: error.message || 'Login failed' });
//   }
// };

// module.exports = {
//   login
// };
