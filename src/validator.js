// Validate that task title is not empty
function isValidTitle(title) {
  return typeof title === 'string' && title.trim().length > 0;
}

// Validate task number selection against available task list
function isValidTaskNumber(input, totalTasks) {
  const num = parseInt(input, 10);
  return !isNaN(num) && num >= 1 && num <= totalTasks;
}

module.exports = {
  isValidTitle,
  isValidTaskNumber
};
