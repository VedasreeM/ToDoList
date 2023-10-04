function addTask() {
    // Get the task input element
    var taskInput = document.getElementById('newTask');

    // Get the task list element
    var taskList = document.getElementById('taskList');

    // Create a new list item element
    var listItem = document.createElement('li');

    // Create a text node with the task input value
    var taskText = document.createTextNode(taskInput.value);

    // Create a "Mark as Complete" button element
    var completeButton = document.createElement('button');
    completeButton.appendChild(document.createTextNode('Mark'));
    completeButton.className = 'complete-button';
    // Add an event listener to mark the task as complete when the button is clicked
    completeButton.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });


    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));

    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    // Append taskText and completeButton to the list item
    
    listItem.appendChild(completeButton);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = '';
}

function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Remove all tasks
}
