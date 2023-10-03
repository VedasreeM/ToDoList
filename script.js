function addTask() {
    // Get the task input element
    var taskInput = document.getElementById('newTask');

    // Get the task list element
    var taskList = document.getElementById('taskList');

    // Create a new list item element
    var listItem = document.createElement('li');

    // Create a text node with the task input value
    var taskText = document.createTextNode(taskInput.value);


    // Create a div for both content and deleteButton
    var task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');
    // Create a div for content
    var task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // Create a div deleteButton
    var task_delete_el = document.createElement('div');
    task_delete_el .classList.add('delete');



    // Create a delete button element
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));

    // Add a class to the delete button for styling
    deleteButton.className = 'delete-button';

    // Add an event listener to delete the task when the button is clicked
    deleteButton.addEventListener('click', function() {
        task_actions_el.remove();
        // listItem.remove();
    });



    // Append div element to taskList
    taskList.appendChild(task_actions_el);

    // Append content and delete classes to one div each one
    task_actions_el.appendChild(task_content_el)
    task_actions_el.appendChild(task_delete_el)

    // Append taskText to content div
    task_content_el.appendChild(taskText)

    // Append deleteButton to delete div 
    task_delete_el.appendChild(deleteButton)

    // Clear the task input field
    taskInput.value = '';
}



