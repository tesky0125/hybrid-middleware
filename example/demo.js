//USAGE:
//POSITIVE:
var callback = function(data) {
  //handle data
}
TaskParser.execute(context, taskName, params, callback);

//PASSIVE:onPullUp/onPullDown
var callback = function(data) {
    //handle data
  }
  // Callback.bind(context,taskName,callback);
TaskParser.register(context, taskName, callback);
