import TaskParser from './TaskParser';

class NavBarParser extends TaskParser {
	/**
	 * show/hide/set
	 */
	setTitleBar(options) {
		// left:[
		//     {
		//         "callback":"click_back", 
		//         "text":"返回",
		//         "icon":""
		//     }
		// ]
		// center:[
		//     {
		//         "callback": "click_title", 
		//         "value":"标题文字"
		//     },
		//     {
		//          value:"子标题文字", 
		//     }
		// ],
		// right:[{
		//     callback:"click_right", 
		//     value:"按钮文字", 
		//     icon:"car/res/logo.png",  
		// }]

		this.execute(options.taskName, options, options.callback);

	}
	/**
	 * show/hide/set bottombar
	 */
	setBottomBar(options) {
		this.execute(options.taskName, options, options.callback);
	}
}

export default new NavBarParser();