'use strict';

const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const todoThing = document.getElementById('todo-thing');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItem = [];

function Task(desc) {
    this.desc = desc;
    this.stat = false;
}

const createTemlate = (task, index) => {
    return `
        <div class = "to-do-item ${task.stat ? 'checked' : ''}">
            <div class = "description">${task.desc}</div>
            <div class = "buttons">
                <input onclick = "completeTask(${index})" class = "btn-complete" type = "checkbox" ${task.stat ? 'checked' : ''}>
                <button onclick = "deleteTask(${index})" class = "btn-delete">delete</button>
            </div>
        </div>
    `
}

const fillHtml = () => {
    todoThing.innerHTML = "";
    if (tasks.length > 0) {
        tasks.forEach((item, index) => {
            todoThing.innerHTML += createTemlate(item, index);
        });
        todoItem = document.querySelectorAll('to-do-item')
    }
}

fillHtml();

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const comleteTask = (index) => {
    tasks[index].stat = !tasks[index].stat;
    if (tasks[index].stat) {
        todoItem[index].classList.add('checked');
    } else {
        todoItem[index].classList.remove('checked');
    }
    updateLocal();
    fillHtml();
}

btn.addEventListener('click', () => {
    tasks.push(new Task(inp.value));
    updateLocal();
    fillHtml();
    inp.value = '';
})

const deleteTask = (index) => {
    todoItem[index].classList.add('deletion')
    setTimeout(() => {
        tasks.splice(index, 1);
        updateLocal();
        fillHtml();
    }, 500)
}