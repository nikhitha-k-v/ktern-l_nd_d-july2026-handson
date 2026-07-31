const { loadTasks, saveTasks } = require('./storage');
const { printTaskList } = require('./utils');
const { isValidTitle, isValidTaskNumber } = require('./validator');

// View all tasks
function viewTasks() {
  const tasks = loadTasks();
  printTaskList(tasks);
  return tasks;
}

// Add a new task
function addTask(title) {
  if (!isValidTitle(title)) {
    console.log('\nError: Task description cannot be empty.\n');
    return null;
  }

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

  if (!isValidTaskNumber(taskNumber, tasks.length)) {
    console.log('\nError: Invalid task number specified.\n');
    return false;
  }

  const index = parseInt(taskNumber, 10) - 1;
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);

  const statusText = tasks[index].completed ? 'completed' : 'pending';
  console.log(`\nTask "${tasks[index].title}" marked as ${statusText}.\n`);
  return true;
}

// Update task title by 1-based task number
function updateTask(taskNumber, newTitle) {
  const tasks = loadTasks();

  if (!isValidTaskNumber(taskNumber, tasks.length)) {
    console.log('\nError: Invalid task number specified.\n');
    return false;
  }

  if (!isValidTitle(newTitle)) {
    console.log('\nError: New task description cannot be empty.\n');
    return false;
  }

  const index = parseInt(taskNumber, 10) - 1;
  const oldTitle = tasks[index].title;
  tasks[index].title = newTitle.trim();
  saveTasks(tasks);

  console.log(`\nUpdated task "${oldTitle}" to "${tasks[index].title}".\n`);
  return true;
}

// Delete task by 1-based task number
function deleteTask(taskNumber) {
  const tasks = loadTasks();

  if (!isValidTaskNumber(taskNumber, tasks.length)) {
    console.log('\nError: Invalid task number specified.\n');
    return false;
  }

  const index = parseInt(taskNumber, 10) - 1;
  const removedTask = tasks.splice(index, 1)[0];
  saveTasks(tasks);

  console.log(`\nDeleted task: "${removedTask.title}"\n`);
  return true;
}

module.exports = {
  viewTasks,
  addTask,
  toggleTaskStatus,
  updateTask,
  deleteTask
};
