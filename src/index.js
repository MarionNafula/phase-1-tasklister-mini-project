document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

// Get the form and list elements
const form = document.getElementById('create-task-form');
const list = document.getElementById('tasks');

// Function to handle form submission
function handleSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the task description from the form input
  const taskDescription = document.getElementById('new-task-description').value;

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = taskDescription;

  // Add the list item to the list
  list.appendChild(listItem);

  // Clear the form input
  document.getElementById('new-task-description').value = '';
}

// Add event listener to the form
form.addEventListener('submit', handleSubmit);


// Get the form and list elements
const formName = document.getElementById('create-task-form');
const listName = document.getElementById('tasks');

// Function to add task to list
function addTask(taskDescription) {
  const task = document.createElement('li');
  task.textContent = taskDescription;
  list.appendChild(task);
}

// Function to delete task from list
function deleteTask() {
  // Get the first child of the list (the first task)
  const taskToDelete = list.firstChild;
  if (taskToDelete) {
    list.removeChild(taskToDelete);
  }
}

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDescription = document.getElementById('new-task-description').value;
  addTask(taskDescription);
  // Clear form data
  document.getElementById('new-task-description').value = '';
});

// Add event listener to delete task
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    deleteTask();
  }
});