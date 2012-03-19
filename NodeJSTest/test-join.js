var Join = require('join');

var join = Join();
var callbackA = join.add();
var callbackB = join.add();
var callbackC = join.add();

function abcComplete(aArgs, bArgs, cArgs) {
	console.log(aArgs[1] + bArgs[1] + cArgs[1]);
}

setTimeout(function() {
	callbackA(null, 'Hello');
}, 300);

setTimeout(function() {
	callbackB(null, 'World');
}, 500);

setTimeout(function() {
	callbackC(null, '!');
}, 400);

// this must be called after all
join.when(abcComplete);