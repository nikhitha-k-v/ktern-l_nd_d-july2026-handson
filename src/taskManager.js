const { loadTasks } = require('./storage');
const { printTaskList } = require('./utils');

// View all tasks
function viewTasks() {
  const tasks = loadTasks();
  printTaskList(tasks);
  return tasks;
}

module.exports = {
  viewTasks
};
