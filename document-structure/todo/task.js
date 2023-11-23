const inputTodo = document.getElementById("tasks__form");
const tasksInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

const removeTask = (e) => {
	e.target.closest(".task").remove();
}

inputTodo.addEventListener('submit', addTask)
    

function addTask (event) {
    event.preventDefault();

    const taskText = tasksInput.value
  

    const taskHTML = `<div class="task">
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`

  taskList.insertAdjacentHTML('afterbegin', taskHTML)
  
  tasksInput.value = "";
  tasksInput.focus();

  [...(taskList.getElementsByClassName("task__remove"))].forEach(element => {
    element.addEventListener("click", removeTask)
});
}




