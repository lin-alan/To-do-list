document.getElementById('addTaskButton').addEventListener('click', addTask);

// Adding an event listener for the 'keydown' event on the input field
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        addTask(); // Call the addTask function
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        
        // Create a checkbox for the task
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.onclick = function() {
            li.classList.toggle('completed'); // Toggle the 'completed' class on check
        };

        // Create a span to hold the task text
        const span = document.createElement('span');
        span.textContent = taskValue;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the task from the list
        };

        // Append the checkbox, task text, and remove button to the list item
        li.appendChild(checkBox);
        li.appendChild(span);
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

