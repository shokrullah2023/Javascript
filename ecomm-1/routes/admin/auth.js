const repo = require('../../repository/users');
const express = require('express');
const {validationResult} = require('express-validator');
const signinTemplate = require('../../views/admin/auth/signin');
const signupTemplate = require('../../views/admin/auth/signup');
const {requireEmail,
   requirePassword, 
   requirePasswordConfirmation,
  requireValidEmail,
  requireValidPassword
  } = require('./validators');

const router = express.Router();

router.get("/signin", (req, res) => {
  res.send(signinTemplate(req));
});

router.get('/signout', (req, res) => {
    req.session.userId = null;
    res.redirect('/signin');;
}) 

router.post("/signin",[requireValidEmail, requireValidPassword],async (req, res) => {
  const errors = validationResult(req);
  console.log(errors); 
  if(!errors.isEmpty()){
    return res.send(signinTemplate({errors}));
  }

  const { email } = req.body;
    const user = await repo.getOneBy({ email });

  req.session.userId = user.id;
  res.redirect('/admin/product');
});

router.get("/signup", (req, res) => {
    res.send(signupTemplate({req}));
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
  
 router.post("/signup",[requireEmail, requirePassword, requirePasswordConfirmation],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
      return res.send(signupTemplate({errors}));
    }

    const { email, password } = req.body;
    const user = await repo.create({ email, password });
    req.session.userId = user.id;
    res.redirect('/admin/product');
  });
  
  module.exports = router;