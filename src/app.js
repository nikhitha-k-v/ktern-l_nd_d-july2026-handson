const readline = require('readline');
const { viewTasks, addTask, toggleTaskStatus, updateTask, deleteTask } = require('./taskManager');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Handle graceful shutdown on Ctrl+C
rl.on('SIGINT', () => {
  console.log('\n\nExiting To-Do Manager. Have a great day!');
  process.exit(0);
});

function showMenu() {
  console.log('\n==== TO-DO MANAGER ====');
  console.log('1. View All Tasks');
  console.log('2. Add Task');
  console.log('3. Mark Task Complete/Pending');
  console.log('4. Update Task Description');
  console.log('5. Delete Task');
  console.log('6. Exit');
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
        viewTasks();
        rl.question('Enter task number to toggle: ', (num) => {
          toggleTaskStatus(num);
          showMenu();
        });
        break;
      case '4':
        viewTasks();
        rl.question('Enter task number to update: ', (num) => {
          rl.question('Enter new task description: ', (newTitle) => {
            updateTask(num, newTitle);
            showMenu();
          });
        });
        break;
      case '5':
        viewTasks();
        rl.question('Enter task number to delete: ', (num) => {
          deleteTask(num);
          showMenu();
        });
        break;
      case '6':
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
