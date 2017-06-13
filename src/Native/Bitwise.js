// eslint-disable-next-line camelcase, brace-style
var _elm_lang$core$Native_Bitwise = (function _elm_lang$core$Native_Bitwise() {
return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function shiftLeftBy(offset, a) { return a << offset; }),
	shiftRightBy: F2(function shiftRightBy(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function shiftRightZfBy(offset, a) { return a >>> offset; })
};
})();
