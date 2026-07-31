const { loadTasks, saveTasks } = require('./storage');
const { printTaskList } = require('./utils');

// View all tasks
function viewTasks() {
  const tasks = loadTasks();
  printTaskList(tasks);
  return tasks;
}

// Add a new task
function addTask(title) {
  const tasks = loadTasks();
  
  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks(tasks);
  
  console.log(`\nTask added successfully: "${newTask.title}"\n`);
  return newTask;
}

module.exports = {
  viewTasks,
  addTask
};
