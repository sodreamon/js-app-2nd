const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const newId = toDos.length + 1;

  const toDoLi = document.createElement("li");
  toDoLi.id = newId;
  const toDoDelBtn = document.createElement("button");
  const toDoSpan = document.createElement("span");
  toDoDelBtn.innerText = "😂";
  toDoSpan.innerText = text;
  toDoLi.appendChild(toDoDelBtn);
  toDoLi.appendChild(toDoSpan);
  toDoList.appendChild(toDoLi);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(writenToDo) {
      paintToDo(writenToDo.text);
    });
  } else {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
