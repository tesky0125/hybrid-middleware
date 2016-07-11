//callback
const taskNameCallbackMapping = [];

//global callback method for native
//最大的不同，根本不需考虑callbackName,直接由taskName决定，且提供native唯一的window回调，
//真正的回调处理由hybrid处理
window.appCallback = function(taskName, data) {
  const callback = taskNameCallbackMapping[taskName];
  //TODO do callback in hybrid
  callback(data);
}

class Callback {
  static bind(taskName, callback) {
    window.taskNameCallbackMapping[taskName] = callback;
  }
}

export default Callback;
