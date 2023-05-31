const repo = require('../../repository/users');
const express = require('express');
const signinTemplate = require('../../views/admin/auth/signin');
const signupTemplate = require('../../views/admin/auth/signup');

const router = express.Router();

router.get("/signin", (req, res) => {
  res.send(signinTemplate());
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out!');
}) 

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await repo.getOneBy({ email });
  if (!user) {
    return res.send("The email not found");
  }
  const validPassword = await repo.comparePassword(user.password, password);
  if (!validPassword) {
    return res.send("Invalid password");
  }
  req.session.userId = user.id;
  res.send("Your are signed in!!!");
});

router.get("/signup", (req, res) => {
    res.send(signupTemplate());
  });
  
  // const bodyParser = (req, res, next) => {
  //    if(req.method == 'POST'){
  //     req.on('data', data => {
  //         const parsed = data.toString('utf-8').split('&');
  //         const formData = {};
  //         for(let pair of parsed){
  //            const [key, value] = pair.split('=');
  //            formData[key] = value;
  //            next();
  //         }
  //         console.log(formData);
  //     });
  //    }else{
  //     next();
  //    }
  
  // };
  
 router.post("/signup", async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await repo.getOneBy({ email });
    if (existingUser) {
      return res.send("Email already used!");
    }
    if (password !== passwordConfirmation) {
      return res.send("Password is not matching!");
    }
    const user = await repo.create({ email, password });
    req.session.userId = user.id;
    res.send(`Account Created for ${email}`);
  });
  
  module.exports = router;