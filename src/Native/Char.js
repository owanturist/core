/* global _elm_lang$core$Native_Utils */

// eslint-disable-next-line camelcase, brace-style
var _elm_lang$core$Native_Char = (function _elm_lang$core$Native_Char() {
return {
	fromCode: function fromCode(c)
	{
		return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c));
	},
	toCode: function toCode(c) { return c.charCodeAt(0); },
	toUpper: function toUpper(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function toLower(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function toLocaleUpper(c)
	{
		return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase());
	},
	toLocaleLower: function toLocaleLower(c)
	{
		return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase());
	}
};
})();
