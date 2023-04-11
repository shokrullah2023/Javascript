const usersRepo = require("../../repositories/users");
const { check, validationResult } = require("express-validator");
const express = require("express");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const {handleErrors} = require('../../routes/admin/middlewares');
const {requireEmail, requirePassword, requirePasswordConfirmation, requiredEmailExists, requirePasswordForUser} = require('./validators');


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
    requireEmail, requirePassword, requirePasswordConfirmation], handleErrors(signupTemplate),
  async (req, res) => {
    // const errors = validationResult(req);
    
    // if(!errors.isEmpty()){
    //   res.send(signupTemplate({req, errors}));
    // }

    const { email, password, passwordConfirmation } = req.body;

    // Create a user in out repo to represent this person
    const user = await usersRepo.create({ email, password });

    // Store the id of that user inside the users cookies
    req.session.userId = user.id;

    res.redirect('/admin/products');
  }
);

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out!");
  // res.redirect('/admin/products');
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post("/signin",[requiredEmailExists, requirePasswordForUser],handleErrors(signinTemplate), async (req, res) => {
  // const errors = validationResult(req);
  
  // if(!errors.isEmpty()){
  //   return res.send(signinTemplate({ errors }));
  // }


  const { email} = req.body;

  const user = await usersRepo.getOneBy({ email });

  req.session.userId = user.id;

  res.redirect('/admin/products');
});



module.exports = router;
