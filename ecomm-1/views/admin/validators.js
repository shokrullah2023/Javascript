const {check} = require('express-validator');
const repo = require('../../repository/users');

module.exports = {
   requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid Email')
    .custom(async email => {
      const existingUser = await repo.getOneBy({email});
      if(existingUser){
        throw new Error('Email in use');
      }
    }),
    requirePassword: check('password')
    .trim()
    .isLength({min:6, max:12})
    .withMessage('Must be between 6 - 12')
    ,
    requirePasswordConfirmation:check('passwordConfirmation')
    .trim()
    .isLength({min:6 , max:12})
    .withMessage('Must match with the password')
    .custom((passwordConfirmation, {req}) => {
      if(passwordConfirmation !== req.body.passwordConfirmation){
        throw new Error ("Password is not matching");
      }
    }),
    requireValidEmail: check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom(async email => {
      const existingUser = await repo.getOneBy({email});
      if(!existingUser){
        throw new Error ('Email is not found!');
      }
    }),
    requireValidPassword:
    check('password')
    .trim()
    .isLength({min:6, max:10})
    .withMessage('Password must be 6-10')
    .custom(async (password, {req}) => {
      const user = await repo.getOneBy({ email: req.body.email });
      if(!user){
        throw new Error('Invalid Password');
      }
      const validPassword = await repo.comparePassword(user.password, password);
      if (!validPassword) {
        throw new Error('Invalid');
      }
    })

}