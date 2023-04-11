const Repository = require('./repository');

class cartRepository extends Repository{}

module.exports = new cartRepository('carts.json');