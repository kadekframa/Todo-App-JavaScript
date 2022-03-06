const todos = [];
const RENDER_EVENT = "render-todo";


document.addEventListener("DOMContentLoaded", function(){
    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function(){
        event.preventDefault();
        addTodo();
    });
});

function addTodo(){
    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    const generatedID = generatedId();
    const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

function generatedId(){
    return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted){
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}

document.addEventListener(RENDER_EVENT, function(){
    console.info(todos);
});