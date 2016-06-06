import TaskParser from './TaskParser';

class BusinessParser extends TaskParser {
	httpRequest(options) {
		this.execute(options.taskName, options, options.callback);
	}
}

export default new BusinessParser();