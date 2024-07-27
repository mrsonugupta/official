// Timer
let timerSeconds = 0;
let timerInterval;
let isTimerActive = false;

document.getElementById('startTimer').addEventListener('click', () => {
    if (!isTimerActive) {
        isTimerActive = true;
        timerInterval = setInterval(() => {
            timerSeconds++;
            document.getElementById('timerDisplay').textContent = `${timerSeconds} seconds`;
        }, 1000);
    }
});

document.getElementById('pauseTimer').addEventListener('click', () => {
    isTimerActive = false;
    clearInterval(timerInterval);
});

document.getElementById('resetTimer').addEventListener('click', () => {
    isTimerActive = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    document.getElementById('timerDisplay').textContent = '0 seconds';
});

// Alarm
document.getElementById('setAlarm').addEventListener('click', () => {
    const alarmTime = document.getElementById('alarmTime').value;
    const alarmDate = new Date();
    const [hours, minutes] = alarmTime.split(':');
    alarmDate.setHours(hours, minutes, 0);

    const now = new Date();
    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            document.getElementById('alarmSound').play();
            alert('Alarm ringing!');
        }, timeToAlarm);
    } else {
        alert('Alarm time is in the past!');
    }
});

// Task Management
document.getElementById('addTask').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;

    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});

// Pomodoro Timer
let pomodoroMinutes = 25;
let pomodoroSeconds = 0;
let pomodoroInterval;
let isPomodoroActive = false;

document.getElementById('startPomodoro').addEventListener('click', () => {
    if (!isPomodoroActive) {
        isPomodoroActive = true;
        pomodoroInterval = setInterval(() => {
            if (pomodoroSeconds === 0) {
                if (pomodoroMinutes === 0) {
                    clearInterval(pomodoroInterval);
                    isPomodoroActive = false;
                    alert('Pomodoro session complete!');
                    return;
                }
                pomodoroMinutes--;
                pomodoroSeconds = 59;
            } else {
                pomodoroSeconds--;
            }
            const minutesDisplay = pomodoroMinutes.toString().padStart(2, '0');
            const secondsDisplay = pomodoroSeconds.toString().padStart(2, '0');
            document.getElementById('pomodoroDisplay').textContent = `${minutesDisplay}:${secondsDisplay}`;
        }, 1000);
    }
});

document.getElementById('pausePomodoro').addEventListener('click', () => {
    isPomodoroActive = false;
    clearInterval(pomodoroInterval);
});

document.getElementById('resetPomodoro').addEventListener('click', () => {
    isPomodoroActive = false;
    clearInterval(pomodoroInterval);
    pomodoroMinutes = 25;
    pomodoroSeconds = 0;
    document.getElementById('pomodoroDisplay').textContent = '25:00';
});
