//callback
var taskNameCallbackMapping = [];

//global callback method for native
//最大的不同，根本不需考虑callbackName,直接由taskName决定，且提供native唯一的window回调，
//真正的回调处理由hybrid处理
window.appCallback = function(taskName, data){
	var callback = taskNameCallbackMapping[taskName];
	//TODO do callback in hybrid
	callback(data);
}

var Callback = {
	bind: function(context,taskName,callback){
		window.cbNameCallbackMapping[taskName] = callback.bind(context);
	}
}

var Bridge = {
	call: function(options){
		NativeTaskParser.callTask(options);
	}
}

var TaskParser = {
	execute: function (ctx,taskName,params,callback) {
		var options = {
			taskName,params
		}
		Callback.bind(ctx,taskName,callback);
		Bridge.call(options);
	},
	register: function (ctx,taskName,callback) {
		Callback.bind(ctx,taskName,callback);
	}
}

//USAGE:
//POSITIVE:
var callback = function(data){
	//handle data
}
TaskParser.execute(context,taskName,params,callback);

//PASSIVE:onPullUp/onPullDown
var callback = function(data){
	//handle data
}
// Callback.bind(context,taskName,callback);
TaskParser.register(context,taskName,callback);