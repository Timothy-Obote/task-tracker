How It Works
Task Storage:
Tasks are stored in an array of objects, each with description and completed properties.

Add Task:
When a user enters a task description and clicks the "Add Task" button, the addTask function adds the task to the array and re-renders the task list.

Mark Complete/Unmark:
Clicking the "Complete" or "Unmark" button toggles the task's completed status and re-renders the list.

Delete Task:
Clicking the "Delete" button removes the task from the array and updates the list.

Dynamic Rendering:
The renderTasks function ensures the DOM is updated dynamically based on the current state of the tasks array.
