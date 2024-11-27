// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear the task list

  // Separate tasks into pending and completed
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Combine pending and completed tasks to maintain order
  const sortedTasks = [...pendingTasks, ...completedTasks];

  sortedTasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    if (task.completed) {
      taskDiv.classList.add('completed');
    }

    // Task description
    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDiv.appendChild(taskDescription);

    // Toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? 'Unmark' : 'Complete';
    toggleBtn.addEventListener('click', () => toggleTask(index));
    taskDiv.appendChild(toggleBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(index));
    taskDiv.appendChild(deleteBtn);

    // Append to task list
    taskList.appendChild(taskDiv);
  });
}

// Function to add a task
function addTask(description) {
  if (description.trim() === '') {
    alert('Task description cannot be empty.');
    return;
  }
  tasks.push({ description, completed: false });
  renderTasks();
}

// Function to toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event listener for adding tasks
document.getElementById('addTaskBtn').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  addTask(taskInput.value);
  taskInput.value = ''; // Clear the input field
});

// Initial rendering
renderTasks();
