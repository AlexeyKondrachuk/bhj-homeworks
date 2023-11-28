'use strict'
const inputTodo = document.getElementById("tasks__form");
const tasksInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

taskList.addEventListener("click", itemRemove)



inputTodo.addEventListener('submit', addTask)
    

function addTask (event) {
    event.preventDefault();

    const taskText = tasksInput.value
    
    if (taskText.trim() !== "") {
      
    const taskHTML = `<div class="task">
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`

  taskList.insertAdjacentHTML('afterbegin', taskHTML)
  
  tasksInput.value = "";
  tasksInput.focus();
}

}

function itemRemove(e) {
  const item = e.target;
  
  if (item.classList[0] === "task__remove") {
      const todo = item.parentElement;
      todo.remove();
      
    
      }
  }
 

















