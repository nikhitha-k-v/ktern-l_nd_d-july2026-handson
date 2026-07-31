const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'tasks.json');

// Ensure parent data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Load tasks array from JSON storage file
function loadTasks() {
  try {
    ensureDataDir();

    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf8');
      return [];
    }

    const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('[Storage Error] Unable to read tasks file:', error.message);
    return [];
  }
}

// Save tasks array to JSON storage file
function saveTasks(tasks) {
  try {
    ensureDataDir();
    const dataString = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(DATA_FILE, dataString, 'utf8');
    return true;
  } catch (error) {
    console.error('[Storage Error] Unable to write to tasks file:', error.message);
    return false;
  }
}

module.exports = {
  loadTasks,
  saveTasks
};
