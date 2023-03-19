const layout = require('../layout');

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    } catch (err) {
        return '';
    }
}
 
module.exports = ({ req, errors}) => {
   return layout({
    content: `<div>
        ${req.session.userId}
        <form method="POST">
        ${getError(errors, 'email')}
            <input name="email" placeholder="email"/>
            ${getError(errors, 'password')}
            <input name="password" placeholder="password"/>
            ${getError(errors, 'passwordConfirmation')}
            <input name="passwordConfirmation" placeholder="passwordConfirmation" />
            <button>Sign Up</button>
        </form>
    </div>`})
};
