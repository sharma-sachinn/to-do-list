function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var tasksContainer = document.getElementById('tasks-container');

        var taskElement = document.createElement('div');
        taskElement.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskLabel);

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                tasksContainer.removeChild(taskElement);
            }
        });

        tasksContainer.appendChild(taskElement);

        taskInput.value = '';
    }
}
