class TaskParser {
  execute(taskName, params, callback) {
      const options = {
        taskName,
        params
      }
      Callback.bind(taskName, callback);
      Bridge.call(options);
    },

    register(ctx, taskName, callback) {
      Callback.bind(taskName, callback);
    }
}

export default TaskParser;
