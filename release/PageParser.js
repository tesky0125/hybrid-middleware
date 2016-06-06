import TaskParser from './TaskParser';

class PageParser extends TaskParser {
	refresh(options) {
		this.execute(options.taskName, options, options.callback);
	}
	open(options) {
		this.execute(options.taskName, options, options.callback);
	}
}

export default new PageParser();