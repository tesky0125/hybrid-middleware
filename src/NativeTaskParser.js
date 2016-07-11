class NativeTaskParser {
	public void callTask(JSONObject options){
		String taskName = options.taskName;
		String params = options.params;
		//
		if(positive){
			TaskExecuter.execute(taskName,params);
		}else{//passive
			
		}
	}
}

class TaskExecuter {
	public void execute(taskName,params){
		String data = doBusinessJob(taskName,params);
		//TODO do not callback in native
		window.appCallback(taskName,data);
	}
}

class WebViewActivity {
	public void onPullDown(data){
		//taskName: 'pullDown' taskName一定存在且唯一由native决定
		window.appCallback(taskName,data);
	}
}

