const usersRepo = require("../../repositories/users");
const { check } = require("express-validator");

module.exports = {
  requireTitle: check('Title')
    .trim()
    .isLength({min:5, max:40})
    .withMessage('Must be between 5 and 40 character'),
    requirePrice:check('Price')
    .trim()
    .toFloat()
    .isFloat({min:1})
    .withMessage("Must be greater than 1"),
  requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email")
    .custom(async (email) => {
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) {
        throw new Error("Email in use");
      }
    }),

  requirePassword: check("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 to 20 character"),

  requirePasswordConfirmation: check("passwordConfirmation")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 to 20 character")
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error("Password must match!");
      }
    }),

  requirePasswordForUser: check("password")
    .trim()
    .custom(async (password, { req }) => {
      const user = await usersRepo.getOneBy({ email: req.body.email });
      if (!user) {
        throw new Error("Invalid password");
      }
      const validPassword = await usersRepo.comparePassword(
        user.password,
        password
      );

      if (!validPassword) {
        throw new Error("Invalid password");
      }
    }),

  requiredEmailExists: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must Provide a valid email")
    .custom(async (email) => {
      const user = await usersRepo.getOneBy({ email });
      if (!user) {
        throw new Error("Email not found!");
      }
    })
};
