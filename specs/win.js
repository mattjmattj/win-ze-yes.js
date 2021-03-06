var win = require("../src/win");

describe ('win', function() {
	it('needs the yes to win when true', function() {
		win(function(){ return true; }).needs.the.yes.to.win;
		win(true).needs.the.yes.to.win;
	});
	
	it('needs the yes to win again ze now', function() {
		win(true).needs.the.yes.to.win.again.ze.now;
	});
	
	it('needs the yes to win against the no when true', function() {
		win(function(){ return true; }).needs.the.yes.to.win.against.the.no;
		win(true).needs.the.yes.to.win.against.the.no;
	});
	
	it('needs the no to win against the yes when false', function() {
		win(function(){ return false; }).needs.the.no.to.win.against.the.yes;
		win(false).needs.the.no.to.win.against.the.yes;
	});
	
	it('needs NOT the no to win against the yes when true', function() {
		win(function(){
			var error = null;
			
			try {
				win(function(){ return true; }).needs.the.no.to.win;
			} catch(e) {
				error = e;
			}
			
			return error != null;
			
		}).needs.the.yes.to.win;
		
		win(function(){
			var error = null;
			
			try {
				win(true).needs.the.no.to.win;
			} catch(e) {
				error = e;
			}
			
			return error != null;
			
		}).needs.the.yes.to.win;
	});
	
	it('needs NOT the yes to win against the no when false', function() {
		win(function(){
			var error = null;
			
			try {
				win(function(){ return false; }).needs.the.yes.to.win;
			} catch(e) {
				error = e;
			}
			
			return error != null;
			
		}).needs.the.yes.to.win;
		
		win(function(){
			var error = null;
			
			try {
				win(false).needs.the.yes.to.win;
			} catch(e) {
				error = e;
			}
			
			return error != null;
			
		}).needs.the.yes.to.win;
	});
});