import Bridge from './Bridge';
import Callback from './Callback';

class TaskParser {
	execute(taskName, options, callback) {
		let sessionId = Date.now();

		Callback.bind(taskName, sessionId, callback);

		let opts = {
			taskName: taskName,
			sessionId: sessionId,
		};
		Object.assign(options, opts);
		Bridge.call(options);
	}

	register(taskName, callback) {
		Callback.bind(taskName, callback);
	}
}

export default TaskParser;