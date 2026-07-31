const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../data/tasks.json');

// Load all tasks from the JSON file
function loadTasks() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading tasks file:', error.message);
    return [];
  }
}

// Save tasks array to the JSON file
function saveTasks(tasks) {
  try {
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(DATA_FILE, data, 'utf8');
  } catch (error) {
    console.error('Error writing tasks file:', error.message);
  }
}

module.exports = {
  loadTasks,
  saveTasks
};
