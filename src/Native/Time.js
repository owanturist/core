/* global
	_elm_lang$core$Native_Scheduler
*/

// eslint-disable-next-line camelcase, brace-style
var _elm_lang$core$Native_Time = (function _elm_lang$core$Native_Time() {
var now = _elm_lang$core$Native_Scheduler.nativeBinding(function job(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function job()
	{
		var id = setInterval(function intervalCb()
		{
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function clearInterval_() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};
})();
