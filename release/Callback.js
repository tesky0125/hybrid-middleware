let taskCallbackMap = {};

window.appCallback = function(taskName, sessionId, data) {
	let callback = taskCallbackMap[taskName][sessionId];
	callback(data);
	delete taskCallbackMap[taskName][sessionId];
};

class Callback {
	static bind(taskName, sessionId, callback) {
		if (taskCallbackMap[taskName]) taskCallbackMap[taskName] = {};
		taskCallbackMap[taskName][sessionId] = callback;
	}
}

export default Callback;