// Task form ko get karo
const taskForm = document.getElementById('task-form');

// Task input field ko get karo
const taskInput = document.getElementById('task-input');

// Priority select field ko get karo
const prioritySelect = document.getElementById('priority-select');

// Due date input field ko get karo
const dueDateInput = document.getElementById('due-date-input');

// Task list ko get karo
const taskList = document.getElementById('task-list');

// Notification icon ko get karo
const notificationIcon = document.getElementById('notification-icon');

// Notification count ko get karo
const notificationCount = document.getElementById('notification-count');

// Theme button ko get karo
const themeBtn = document.getElementById('theme-btn');

// Progress bar ko get karo
const progressBar = document.getElementById('progress-bar');

// Progress percent ko get karo
const progressPercent = document.getElementById('progress-percent');

// Task form ko submit event add karo
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;
    if (task) {
        const taskListItem = document.createElement('li');
        taskListItem.innerHTML = `
            <h3>${task}</h3>
            <p>Priority: ${priority}</p>
            <p>Due Date: ${dueDate}</p>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskListItem);
        taskInput.value = '';
        dueDateInput.value = '';
        taskListItem.querySelector('.complete-btn').addEventListener('click', () => {
            taskListItem.classList.toggle('completed');
        });
        taskListItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskListItem.remove();
        });
    }
});

// Theme button ko click event add karo
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Progress bar ko update karne ke liye function
function updateProgressBar() {
    progressBar.style.width = '50%';
    progressBar.classList.add('animate');
}

// Progress bar ki animation ko add karo
progressBar.addEventListener('animationend', () => {
    progressBar.style.width = '0%';
    progressBar.classList.remove('animate');
});

// Progress bar ko update karne ke liye button ko click karo
document.getElementById('add-task-btn').addEventListener('click', updateProgressBar);

// Due date ko set karne ke liye function
function setDueDate() {
    const dueDate = dueDateInput.value;
    document.getElementById('task-due-date').innerText = dueDate;
}

// Due date input field ko change event add karo
dueDateInput.addEventListener('change', setDueDate);

// Notification count ko update karne ke liye function
function updateNotificationCount() {
    const notificationCountValue = parseInt(notificationCount.textContent);
    notificationCount.textContent = notificationCountValue + 1;
}

// Notification icon ko click event add karo
notificationIcon.addEventListener('click', updateNotificationCount);
// Due date ko set karne ke liye function
function setDueDate() {
    const dueDate = new Date(dueDateInput.value);
    const day = dueDate.getDate();
    const month = dueDate.getMonth() + 1;
    const year = dueDate.getFullYear().toString().slice(-2);
    document.getElementById('task-due-date').innerText = `${day}/${month}/${year}`;
}

// Due date input field ko change event add karo
dueDateInput.addEventListener('change', setDueDate);
