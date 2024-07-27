// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');
    const clearTasks = document.getElementById('clearTasks');
    const timerMinutes = document.getElementById('timerMinutes');
    const startTimer = document.getElementById('startTimer');
    const timerDisplay = document.getElementById('timerDisplay');
    const alarmTime = document.getElementById('alarmTime');
    const setAlarm = document.getElementById('setAlarm');

    // Add Task
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = taskInput.value;
        const date = taskDate.value;
        const time = taskTime.value;
        if (task) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${task} - ${date} ${time}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            // Clear input fields
            taskInput.value = '';
            taskDate.value = '';
            taskTime.value = '';

            // Add event listener to the delete button
            const deleteButton = listItem.querySelector('.delete');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
        }
    });

    // Clear All Tasks
    clearTasks.addEventListener('click', () => {
        taskList.innerHTML = '';
    });

    // Timer
    startTimer.addEventListener('click', () => {
        const minutes = parseInt(timerMinutes.value, 10);
        if (isNaN(minutes) || minutes <= 0) return;
        const endTime = Date.now() + minutes * 60000;
        const interval = setInterval(() => {
            const remainingTime = endTime - Date.now();
            if (remainingTime <= 0) {
                clearInterval(interval);
                timerDisplay.textContent = 'Time’s up!';
                return;
            }
            const minutesLeft = Math.floor(remainingTime / 60000);
            const secondsLeft = Math.floor((remainingTime % 60000) / 1000);
            timerDisplay.textContent = `${minutesLeft}m ${secondsLeft}s`;
        }, 1000);
    });

    // Alarm
    setAlarm.addEventListener('click', () => {
        const alarmTimeValue = alarmTime.value;
        const [hours, minutes] = alarmTimeValue.split(':').map(Number);
        const alarmDate = new Date();
        alarmDate.setHours(hours);
        alarmDate.setMinutes(minutes);
        alarmDate.setSeconds(0);
        const now = new Date();
        const timeToAlarm = alarmDate - now;
        if (timeToAlarm < 0) return;
        setTimeout(() => {
            alert('Alarm ringing!');
        }, timeToAlarm);
    });
});
