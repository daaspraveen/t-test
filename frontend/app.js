const API_URL = "https://t-test.onrender.com/api/tasks"
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = document.getElementById('task-input').value;
    if (!task) return;
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task })
    });
    document.getElementById('task-input').value = '';
    loadTasks();
});

async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.task;
        taskList.appendChild(li);
    });
}
loadTasks();
