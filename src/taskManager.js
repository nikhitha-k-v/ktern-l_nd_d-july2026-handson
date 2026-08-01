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

// Toggle task completion status using 1-based task number
function toggleTaskStatus(taskNumber) {
  const tasks = loadTasks();
  const index = parseInt(taskNumber) - 1;

  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log('\nInvalid task number.\n');
    return false;
  }

  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);

  const statusText = tasks[index].completed ? 'completed' : 'pending';
  console.log(`\nTask "${tasks[index].title}" marked as ${statusText}.\n`);
  return true;
}

// Update task title by 1-based task number
function updateTask(taskNumber, newTitle) {
  const tasks = loadTasks();
  const index = parseInt(taskNumber) - 1;

  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log('\nInvalid task number.\n');
    return false;
  }

  const oldTitle = tasks[index].title;
  tasks[index].title = newTitle.trim();
  saveTasks(tasks);

  console.log(`\nUpdated task "${oldTitle}" to "${tasks[index].title}".\n`);
  return true;
}

module.exports = {
  viewTasks,
  addTask,
  toggleTaskStatus,
  updateTask
};
