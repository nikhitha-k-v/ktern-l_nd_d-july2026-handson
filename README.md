# To-Do CLI Application

## Overview

This is a simple command-line interface (CLI) To-Do Manager application built with Node.js. It was developed as a hands-on project to practice fundamental Node.js concepts, JavaScript modules, JSON file handling, and Git version control workflows.

The application allows users to create, view, complete, edit, and delete tasks directly from their terminal without using external database software.

## Features

- **View Tasks**: Display all tasks with their current status (`[X]` for complete and `[ ]` for pending).
- **Add Task**: Create new tasks with description text.
- **Mark Task Complete/Pending**: Toggle task completion status easily by entering task number.
- **Update Task Description**: Edit existing task details.
- **Delete Task**: Remove unwanted tasks from the list.
- **Local Persistence**: Automatically saves data to a JSON file (`data/tasks.json`).
- **Input Validation**: Prevents adding empty task names or selecting invalid task numbers.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **JavaScript (CommonJS)**: Language used for logic (`require` / `module.exports`)
- **Node.js Core Modules**:
  - `readline`: Handles interactive terminal prompts and inputs
  - `fs`: File system module for reading/writing JSON files
  - `path`: Resolves file system directory paths cleanly

## Folder Structure

```text
todo-cli-app/
│
├── data/
│   └── tasks.json
│
├── src/
│   ├── app.js
│   ├── taskManager.js
│   ├── storage.js
│   ├── validator.js
│   └── utils.js
│
├── package.json
├── README.md
└── .gitignore
```

## Installation

1. Clone or download this repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-cli-app
   ```
3. Make sure Node.js is installed on your computer.

## Running the Project

Start the application using npm:

```bash
npm start
```

Or run directly with Node:

```bash
node src/app.js
```

## Sample Usage

When you launch the app, you will see the interactive terminal menu:

```text
==== TO-DO MANAGER ====
1. View All Tasks
2. Add Task
3. Mark Task Complete/Pending
4. Update Task Description
5. Delete Task
6. Exit
=======================

Choose an option (1-6): 2
Enter task description: Finish Node.js training exercises

Task added successfully: "Finish Node.js training exercises"
```

Viewing your task list:

```text
--- Your To-Do List ---
1. [ ] Finish Node.js training exercises
2. [X] Practice Git branching
-----------------------
```

## Future Improvements

- Add task priority categories (High, Medium, Low)
- Filter tasks by status (show only pending or only completed)
- Add due date tracking for tasks
- Support clearing all completed tasks at once

## Git Workflow Used

This project followed a simulated feature branch development workflow. Each feature, enhancement, bug fix, and documentation update was built in its own dedicated Git branch before being merged into the `main` branch.

Branch naming conventions followed:
- `docs-initial-readme`
- `feat-json-storage`
- `feat-view-tasks`
- `feat-add-task`
- `feat-mark-complete`
- `feat-update-task`
- `feat-delete-task`
- `enh-input-validation`
- `enh-error-handling`
- `fix-menu-loop`
- `refactor-storage-module`
- `enh-readme`

## Learning Outcomes

- Understood how to split code into modular CommonJS files.
- Learned how to read and write local JSON data using Node.js `fs` module.
- Gained practice using `readline` module for interactive CLI terminal prompts.
- Mastered basic Git commands (`checkout -b`, `commit`, `merge`, `status`, `log`).
- Learned how to write clear commit messages and Pull Request descriptions.
