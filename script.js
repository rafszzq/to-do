function addTask() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const tasksList = document.getElementById("task");
                const newTask = document.createElement("li");
                newTask.innerHTML = `
                    ${taskText}
                    <button onclick="removeTask(this)">Remover</button>
                `;
                tasksList.appendChild(newTask);

                taskInput.value = "";
            }
        }

        function removeTask(button) {
            const taskToRemove = button.parentElement;
            taskToRemove.remove();
        }
