class NativeTaskParser {
	public void callTask(JSONObject options){
		String taskName = options.taskName;
		String params = options.params;
		String callbackName = options.callbackName;
		//
		if(positive){
			TaskExecuter.execute(taskName,params,callbackName);
		}else{//passive
			TaskExecuter.register(taskName,callbackName);
		}
	}
}

class TaskExecuter {
	public void execute(taskName,params,callbackName){
		String data = doBusinessJob(taskName,params);
		//TODO do callback in native
		window[callbackName](data);
	}
	//TODO
	public void register(taskName,callbackName){
		nativePassiveMapping[taskName] = callbackName;
	}
}

class WebViewActivity {
	public void onPullDown(data){
		String callbackName = nativePassiveMapping[taskName];
		window[callbackName](data);
	}
}

