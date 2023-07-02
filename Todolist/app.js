// Récupère les éléments HTML nécessaires
var input = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Ajoute un gestionnaire d'événement sur le bouton "Ajouter"
addButton.addEventListener("click", function () {
  addTask();
});

// Ajoute un gestionnaire d'événement sur la pression de la touche "Entrée" dans la zone de texte
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

function addTask() {
  if (input.value === "") {
    alert("Veuillez entrer une tâche");
    return;
  }

  var task = document.createElement("li");
  var taskText = document.createTextNode(input.value);
  task.appendChild(taskText);

  task.addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  taskList.appendChild(task);
  input.value = "";
}
