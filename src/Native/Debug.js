/* global _elm_lang$core$Native_Utils */

// eslint-disable-next-line camelcase, brace-style
var _elm_lang$core$Native_Debug = (function _elm_lang$core$Native_Debug() {
function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};
})();
