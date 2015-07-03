
var Assertion = function(condition) {
	this.condition = condition;
	this.positive = true;
	this.message = 'win';
}

Assertion.prototype = {
	
	constructor: Assertion,
	
	get yes() {
		this.message += ' yes';
		this.positive = true;
		return this;
	},
	
	get no() {
		this.message += ' no';
		this.positive = false;
		return this;
	},
	
	get now() {
		this.message += ' now';
		this.positive = false;
		return this;
	},
	
	get win() {
		this.message += ' win';
		
		if (typeof(this.condition) === 'function') {
			this.condition = this.condition();
		}
		
		if (!!this.condition !== !!this.positive) {
			throw new Error(this.message);
		}
		return this;
	}
};

var keywords = ['needs','the','ze','to','against','again'];
keywords.forEach(function(word) {
	Object.defineProperty(Assertion.prototype, word, {
		get: function() {
			this.message += ' '+word;
			return this;
		}
	});
});



module.exports = Assertion;