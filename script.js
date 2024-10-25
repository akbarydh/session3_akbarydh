// add tasks
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// background color
function changeBackgroundColor() {
    const selectedColor = document.getElementById('backgroundColor').value;
    document.body.style.backgroundColor = selectedColor;
}

// font size
function increaseFontSize() {
    document.body.style.fontSize = 'larger';
}

// decrease font size
function decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
}

// dark mode
function toggleDarkMode() {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = '';
        body.style.color = '';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
}

// ganti font style
function changeFontStyle() {
    const body = document.body;
    if (body.style.fontFamily === 'sans-serif') {
        body.style.fontFamily = 'monospace';
    } else {
        body.style.fontFamily = 'sans-serif';
    }
}
