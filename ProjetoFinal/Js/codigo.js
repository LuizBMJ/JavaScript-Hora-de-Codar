const input = document.getElementById("task-input");
const form = document.getElementById("task-form");
const addButton = document.getElementById("task-btn");
const h2 = document.getElementById("task-h2");
const taskList = document.getElementById("task-list");

if(getTasks().length === 0) {
    h2.textContent = "Você ainda não tem tarefas!";
}

function getTasks() {
    const stored = localStorage.getItem("tarefas");
    return stored ? JSON.parse(stored) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
}

function createTaskElement(taskObj) {
    const li = document.createElement("li");
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const taskTextSpan = document.createElement("span");
    const buttonsDiv = document.createElement("div");

    li.classList.add("task-item");
    if (taskObj.completed) {
        li.classList.add("completed");
    }

    completeBtn.classList.add("task-btn-action", "complete-btn");
    completeBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

    deleteBtn.classList.add("task-btn-action", "delete-btn");
    deleteBtn.innerHTML = `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;

    taskTextSpan.classList.add("task-text");
    taskTextSpan.textContent = taskObj.text;

    buttonsDiv.classList.add("task-buttons");
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(taskTextSpan);
    li.appendChild(buttonsDiv);
    li.dataset.id = taskObj.id;

    return li;
}

function addTask(text) {
    const tasks = getTasks();
    const newTask = {
        id: Date.now().toString(),
        text: text,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    taskList.appendChild(createTaskElement(newTask));
    input.value = "";
    h2.textContent = "Suas tarefas:";
}

function renderAllTasks() {
    const tasks = getTasks();
    taskList.innerHTML = "";
    if (tasks.length > 0) {
        h2.textContent = "Suas tarefas:";
        tasks.forEach(function(task) {
            taskList.appendChild(createTaskElement(task));
        });
    }
}

taskList.addEventListener("click", function(e) {
    const completeBtn = e.target.closest(".complete-btn");
    const deleteBtn = e.target.closest(".delete-btn");

    if (completeBtn) {
        const li = completeBtn.closest("li");
        const taskId = li.dataset.id;
        const tasks = getTasks();
        const task = tasks.find(function(t) { return t.id === taskId; });
        task.completed = !task.completed;
        saveTasks(tasks);
        li.classList.toggle("completed", task.completed);
    }

    if (deleteBtn) {
        const li = deleteBtn.closest("li");
        const taskId = li.dataset.id;
        let tasks = getTasks();
        tasks = tasks.filter(function(t) { return t.id !== taskId; });
        saveTasks(tasks);
        taskList.removeChild(li);
        if (tasks.length === 0) {
            h2.textContent = "Você ainda não tem tarefas!";
        }
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const task = input.value.trim();
    if (task !== "") {
        addTask(task);
    }
});

renderAllTasks();
