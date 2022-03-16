
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "ToDos"


let toDos = [];


function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}



function todoDelete(del){
    const remove = del.target.parentElement;
    remove.remove();
    toDos = toDos.filter((item)=> item.id !== parseInt(remove.id));
        
    
    saveTodos();
}


function paintToDo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo.text;
    li.id = todo.id
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", todoDelete)
    li.appendChild(span);
    li.appendChild(button)
    todoList.appendChild(li);
}




function todoSubmit(event){
    event.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = '';
     
    const toDosobj = {
        text: inputValue,
        id : Date.now(),
    };

    toDos.push(toDosobj);
    paintToDo(toDosobj);
    saveTodos(); 
}



todoForm.addEventListener("submit",todoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)




if(savedToDos ){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
   
      
}




