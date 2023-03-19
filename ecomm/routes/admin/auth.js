const usersRepo = require("../../repository/users");
const { check, validationResult } = require("express-validator");
const express = require("express");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const {requireEmail, requirePassword, requirePasswordConfirmation} = require('./validators');


const router = express.Router();

router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

// const bodyParser = (req, res, next) => {
//     if(req.method === "POST"){
//         req.on('data', data=>{
//             const parsed = data.toString('utf8').split('&');
//             const formData = {};
//             for(let pair of parsed){
//                 const [key, value] = pair.split('=');
//                 formData[key] = value;
//             }
//             req.body = formData;
//             next();
//         });
//     }
//     else {
//         next();
//     }

// }

router.post(
  "/signup",
  [
    requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
      res.send(signupTemplate({req, errors}));
    }

    const { email, password, passwordConfirmation } = req.body;

    // Create a user in out repo to represent this person
    const user = await usersRepo.create({ email, password });

    // Store the id of that user inside the users cookies
    req.session.userId = user.id;

    res.send("Account Created!!!");
  }
);

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out!");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({ req }));
});

router.post("/signin",[
  check('email')
  .trim()
  .normalizeEmail()
  .isEmail()
  .withMessage('Must Provide a valid email')
  .custom(async(email) => {
    const user = await usersRepo.getOneBy({email});
    if(!user){
      throw new Error('Email not found!');
    }
  }),
  check('password').trim()
], async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  const { email, password } = req.body;

  const user = await usersRepo.getOneBy({ email });

  if (!user) {
    return res.send("Email not found!");
  }

  const validPassword = await usersRepo.comparePassword(
    user.password,
    password
  );

  if (!validPassword) {
    return res.send("Invalid password");
  }

  req.session.userId = user.id;

  res.send("You are signed in!!!");
});

module.exports = router;
