function openTaskCreator() {
  backgroundBlur.style.display = "inline";
  createTaskoverlay.style.display = "block";
}

function closeTaskOverlay() {
  createTaskoverlay.style.display = "none";
  editTaskOverlay.style.display = "none";
  backgroundBlur.style.display = "none";
}

function openEditTaskNameOverlay() {
  editTaskOverlay.style.display = "block";
  backgroundBlur.style.display = "inline";
}
