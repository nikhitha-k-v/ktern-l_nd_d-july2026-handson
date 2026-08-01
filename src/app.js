const readline = require('readline');
const { viewTasks, addTask } = require('./taskManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n==== TO-DO MANAGER ====');
  console.log('1. View All Tasks');
  console.log('2. Add Task');
  console.log('3. Exit');
  console.log('=======================\n');
  
  rl.question('Choose an option: ', (choice) => {
    switch (choice.trim()) {
      case '1':
        viewTasks();
        showMenu();
        break;
      case '2':
        rl.question('Enter task description: ', (title) => {
          addTask(title);
          showMenu();
        });
        break;
      case '3':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        showMenu();
        break;
    }
  });
}

// Start application
showMenu();
