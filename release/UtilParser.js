import TaskParser from './TaskParser';

class UtilParser extends TaskParser {
	openPdf(options) {
		this.execute(options.taskName, options, options.callback);
	}
	share(options) {
		this.execute(options.taskName, options, options.callback);
	}
	trace(options) {
		this.execute(options.taskName, options, options.callback);
	}
	callPhone(options) {
		this.execute(options.taskName, options, options.callback);
	}
	checkNetwork(options) {
		this.execute(options.taskName, options, options.callback);
	}
	log(options) {
		this.execute(options.taskName, options, options.callback);
	}
}

export default new UtilParser();