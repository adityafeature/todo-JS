//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listners
todoButton.addEventListener('click', addTodo);


//functions, browser refreshes (to stop this behaviour we do event.preventDefault() )
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //call todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText='hey';
    newTodo.classList.add('todo-item');
}