const addTaskBtn = document.getElementById("add-todo-btn");
const closeOverlayBtn = document.getElementsByClassName("cancel-btn");
const editTaskBtn = document.getElementById("edit-task-name-btn");

const createTaskoverlay = document.getElementById("add-task-overlay");
const editTaskOverlay = document.getElementById("edit-task-overlay");
const backgroundBlur = document.querySelector("div");

addTaskBtn.addEventListener("click", openTaskCreator);
for (var i = 0; i < closeOverlayBtn.length; i++) {
  closeOverlayBtn[i].addEventListener("click", closeTaskOverlay);
}
editTaskBtn.addEventListener("click", openEditTaskNameOverlay);
