function addTask() {
    // Get the task input element
    var taskInput = document.getElementById('newTask');

    // Get the task list element
    var taskList = document.getElementById('taskList');

    // Create a new list item element
    var listItem = document.createElement('li');

    // Create a text node with the task input value
    var taskText = document.createTextNode(taskInput.value);

    // Create a delete button element
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));

    // Add a class to the delete button for styling
    deleteButton.className = 'delete-button';

    // Add an event listener to delete the task when the button is clicked
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    // Append the text and delete button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = '';
}
