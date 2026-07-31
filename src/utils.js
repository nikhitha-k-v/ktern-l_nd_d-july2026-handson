// Format a single task for display in terminal
function formatTask(task, index) {
  const status = task.completed ? '[X]' : '[ ]';
  const id = index + 1;
  return `${id}. ${status} ${task.title}`;
}

// Display task list formatted nicely
function printTaskList(tasks) {
  console.log('\n--- Your To-Do List ---');
  if (tasks.length === 0) {
    console.log('No tasks found. Add a task to get started!');
    return;
  }
  
  tasks.forEach((task, index) => {
    console.log(formatTask(task, index));
  });
  console.log('-----------------------\n');
}

module.exports = {
  formatTask,
  printTaskList
};
