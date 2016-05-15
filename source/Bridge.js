//callbacks
window.cbNameCallbackMapping = {};

var Callback = {
	bind: function(context,callbackName, callback){
		window.cbNameCallbackMapping[callbackName] = callback.bind(context);
	}
}

var Bridge = {
	call: function(options){
		NativeTaskParser.callTask(options);
	}
}

var TaskParser = {
	//positive
	execute: function (ctx,taskName,params,callbackName) {
		var options = {
			taskName,params,callbackName
		}
		Callback.bind(ctx,callbackName,ctx[callbackName]);
		Bridge.call(options);
	},
	//passive TODO
	register: function (ctx,taskName,callbackName) {
		var options = {
			taskName,callbackName
		}
		Callback.bind(ctx,callbackName,ctx[callbackName]);
		Bridge.call(options);
	}
}

//USAGE:
//POSITIVE:
var callback = function(data){//name:callbackName
	//handle data
}
TaskParser.execute(context,taskName,params,callbackName);

//PASSIVE:onPullUp/onPullDown
var callback = function(data){//name:callbackName
	//handle data
}
//Callback.bind(context,callbackName,callback);
TaskParser.register(context,taskName,callbackName);


