import TaskParser from './TaskParser';

class HttpClientParser extends TaskParser {
	sendRequest(options) {
		this.execute(options.taskName, options, options.callback);
	}
}

export default new HttpClientParser();