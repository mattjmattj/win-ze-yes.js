var assertion = require('./lib/assertion');



var Win = function(fn) {
	return new assertion(fn);
};



module.exports = Win;