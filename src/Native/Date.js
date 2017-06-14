/* global
	_elm_lang$core$Result$Err
	_elm_lang$core$Result$Ok
*/

// eslint-disable-next-line camelcase, brace-style
var _elm_lang$core$Native_Date = (function _elm_lang$core$Native_Date() {
function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err(
			'Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.'
		)
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function year(d) { return d.getFullYear(); },
	month: function month(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function day(d) { return d.getDate(); },
	hour: function hour(d) { return d.getHours(); },
	minute: function minute(d) { return d.getMinutes(); },
	second: function second(d) { return d.getSeconds(); },
	millisecond: function millisecond(d) { return d.getMilliseconds(); },
	toTime: function toTime(d) { return d.getTime(); },
	fromTime: function fromTime(t) { return new Date(t); },
	dayOfWeek: function dayOfWeek(d) { return { ctor: dayTable[d.getDay()] }; }
};
})();
