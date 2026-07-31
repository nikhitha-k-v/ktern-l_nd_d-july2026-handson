const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');
const DATA_FILE = path.join(DATA_DIR, 'tasks.json');

// Ensure data directory exists
function ensureDataDirExists() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Load all tasks from the JSON file
function loadTasks() {
  try {
    ensureDataDirExists();
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, '[]', 'utf8');
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('\nWarning: Could not parse tasks.json file. Initializing empty task list.\n');
    return [];
  }
}

// Save tasks array to the JSON file
function saveTasks(tasks) {
  try {
    ensureDataDirExists();
    const data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(DATA_FILE, data, 'utf8');
  } catch (error) {
    console.error('\nError writing to tasks.json file:', error.message, '\n');
  }
}

module.exports = {
  loadTasks,
  saveTasks
};
