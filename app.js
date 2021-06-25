//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);


//functions, browser refreshes (to stop this behaviour we do event.preventDefault() )
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //call todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild( trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function(){
           todo.remove();
        });
    }

    //check mark completed
    if(item.classList[0] ==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}